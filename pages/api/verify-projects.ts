import { NextApiRequest, NextApiResponse } from "next";
import {
  fetchAllDBProjects,
  fetchPinnedProjects,
  insertDBProjects,
  updateDBProjects,
  Project,
} from "../../lib/projects";
import { rebuildWebsite } from "../../lib/vercel";

async function verifyProjectsApi(_: NextApiRequest, res: NextApiResponse) {
  const response = await verifyProjects();

  if (response.status === 204 || response.status > 400) {
    return res.status(500).json({ updated: false });
  }

  await rebuildWebsite();

  return res.status(200).json({ updated: true });
}

export default verifyProjectsApi;

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

    return { status: 204 };
  } catch (e) {
    return { status: 500 };
  }
}

async function getNotInDB(
  pinnedProjects: Omit<Project, "_id">[],
  dbProjects: Project[]
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
  dbProjects: Project[]
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
          dbGuidsMap.get(project.name).stargazerCount !== project.stargazerCount
      )
      .map((project) => {
        return {
          ...project,
          forkCount: dbGuidsMap.get(project.name).forkCount,
          stargazerCount: dbGuidsMap.get(project.name).stargazerCount,
        };
      });
  } catch (e) {
    return [];
  }
}
