import { NextApiRequest, NextApiResponse } from "next";
import {
  fetchAllDBProjects,
  fetchPinnedProjects,
  insertDBProjects,
  Project,
} from "../../lib/projects";

async function verifyProjectsApi(_: NextApiRequest, res: NextApiResponse) {
  const response = await verifyProjects();

  if (response.status === 204 || response.status > 400) {
    return res.status(500).json({ inserted: false });
  }

  return res.status(200).json({ inserted: true });
}

export default verifyProjectsApi;

async function verifyProjects(): Promise<{ status: number }> {
  const notInDBProjects = await getNotInDB();

  try {
    await insertDBProjects(notInDBProjects);
    return { status: 200 };
  } catch (e) {
    return { status: 500 };
  }
}

async function getNotInDB(): Promise<Omit<Project, "_id">[]> {
  const pinnedProjects = await fetchPinnedProjects();

  const dbProjects = await fetchAllDBProjects();

  const dbGuidsSet = new Set<string>();

  dbProjects.forEach((project) => {
    dbGuidsSet.add(project.name);
  });

  return pinnedProjects.filter((article) => !dbGuidsSet.has(article.name));
}
