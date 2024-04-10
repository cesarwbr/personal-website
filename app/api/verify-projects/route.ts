import {
  fetchAllDBProjects,
  fetchPinnedProjects,
  insertDBProjects,
  Project,
  updateDBProjects,
} from "../lib/projects";
import { rebuildWebsite } from "../lib/vercel";

export async function GET() {
  const response = await verifyProjects();

  if (response.status === 304) {
    return new Response(JSON.stringify({ updated: false }), { status: 304 });
  }

  if (response.status > 400) {
    return new Response(JSON.stringify({ updated: false }), { status: 500 });
  }

  await rebuildWebsite();

  return new Response(JSON.stringify({ updated: true }), { status: 200 });
}

async function verifyProjects(): Promise<{ status: number }> {
  const pinnedProjects = await fetchPinnedProjects();
  const dbProjects = await fetchAllDBProjects();

  const notInDBProjects = await getNotInDB(pinnedProjects, dbProjects);
  const updatedProjects = await getUpdatedProjects(pinnedProjects, dbProjects);

  try {
    if (notInDBProjects.length) {
      await insertDBProjects(notInDBProjects);
    }

    if (updatedProjects.length) {
      await updateDBProjects(updatedProjects);
    }

    if (notInDBProjects.length || updatedProjects.length) {
      return { status: 200 };
    }

    return { status: 304 };
  } catch (e) {
    return { status: 500 };
  }
}

async function getNotInDB(
  pinnedProjects: Omit<Project, "_id">[],
  dbProjects: Project[],
): Promise<Omit<Project, "_id">[]> {
  try {
    const dbGuidsSet = new Set<string>();

    dbProjects.forEach((project) => {
      dbGuidsSet.add(project.name);
    });

    return pinnedProjects.filter((project) => !dbGuidsSet.has(project.name));
  } catch (e) {
    return [];
  }
}

async function getUpdatedProjects(
  pinnedProjects: Omit<Project, "_id">[],
  dbProjects: Project[],
): Promise<Project[]> {
  try {
    const dbGuidsMap = new Map<string, Omit<Project, "_id">>();

    pinnedProjects.forEach((project) => {
      dbGuidsMap.set(project.name, project);
    });

    return dbProjects
      .filter(
        (project) =>
          dbGuidsMap.get(project.name).forkCount !== project.forkCount ||
          dbGuidsMap.get(project.name).stargazerCount !==
            project.stargazerCount ||
          dbGuidsMap.get(project.name).contributors.length !==
            project.contributors.length,
      )
      .map((project) => {
        return {
          ...project,
          forkCount: dbGuidsMap.get(project.name).forkCount,
          stargazerCount: dbGuidsMap.get(project.name).stargazerCount,
          contributors: dbGuidsMap.get(project.name).contributors,
        };
      });
  } catch (e) {
    return [];
  }
}
