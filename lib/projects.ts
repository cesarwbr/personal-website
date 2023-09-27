import { ObjectId } from "mongodb";
import { connectToDatabase } from "../config/mongodb";
import { GitHubService } from "./github";

export async function getAllProjects(): Promise<Project[]> {
  const { db } = await connectToDatabase();
  let projectsDb = await db
    .collection("projects")
    .find({})
    .sort({ pubDate: -1 })
    .limit(4)
    .toArray();

  if (!projectsDb) {
    return [];
  }

  const projects = projectsDb
    .map((projectDb) => {
      return {
        ...projectDb,
        _id: projectDb._id.toString(),
      } as Project;
    })
    .sort((a, b) => (a.forkCount > b.forkCount ? -1 : 1));

  return projects;
}

export async function fetchPinnedProjects(): Promise<Omit<Project, "_id">[]> {
  const githubRepositories = await GitHubService.instance
    .fetchPinnedRepositories();

  const projects = await Promise.all(
    githubRepositories.map(async (repository) => {
      const project = repository as Project;
      const gitHubContributors = await GitHubService.instance
        .fetchRepositoryContributors(project.name);

      project.contributors = gitHubContributors.map((gitHubContributor) => {
        const contributor: Contributor = {
          login: gitHubContributor.login,
          id: gitHubContributor.id,
          avatar_url: gitHubContributor.avatar_url,
          html_url: gitHubContributor.html_url,
        };

        return contributor;
      });

      return project;
    }),
  );

  return projects;
}

export async function fetchAllDBProjects(): Promise<Project[]> {
  try {
    const { db } = await connectToDatabase();
    let projectsDb = (await db
      .collection("projects")
      .find({})
      .toArray()) as unknown as Project[];

    if (!projectsDb) {
      return [];
    }

    return projectsDb.map((projectDb) => {
      return {
        ...projectDb,
        _id: projectDb._id.toString(),
      } as Project;
    });
  } catch (e) {
    return [];
  }
}

export async function insertDBProjects(projects: Omit<Project, "_id">[]) {
  const { db } = await connectToDatabase();

  try {
    const result = await db.collection("projects").insertMany(projects);

    return result;
  } catch (e) {
    throw new Error("Cannot insert projects");
  }
}

export async function updateDBProjects(projects: Project[]) {
  const { db } = await connectToDatabase();

  try {
    const result = await Promise.all(
      projects.map((project) => {
        return db.collection("projects").updateOne(
          { _id: new ObjectId(project._id) },
          {
            $set: {
              forkCount: project.forkCount,
              stargazerCount: project.stargazerCount,
              contributors: project.contributors,
            },
          },
        );
      }),
    );

    return result;
  } catch (e) {
    throw new Error("Cannot update projects");
  }
}

export interface Project {
  _id: string;
  name: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
  description: string;
  homepageUrl: string;
  forkCount: number;
  stargazerCount: number;
  url: string;
  contributors: Contributor[];
}

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}
