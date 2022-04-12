import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const { GITHUB_API_GRAPHQL_ENDPOINT, GITHUB_API_GRAPHQL_TOKEN } = process.env;

export class GitHubService {
  private client: GraphQLClient;
  private static gitHubServiceInstance: GitHubService;

  private constructor() {
    this.client = new GraphQLClient(GITHUB_API_GRAPHQL_ENDPOINT, {
      headers: {
        Authorization: `bearer ${GITHUB_API_GRAPHQL_TOKEN}`,
      },
    });
  }

  public static get instance(): GitHubService {
    if (!GitHubService.gitHubServiceInstance) {
      GitHubService.gitHubServiceInstance = new GitHubService();
    }

    return GitHubService.gitHubServiceInstance;
  }

  public async fetchPinnedRepositories(): Promise<GitHubRepository[]> {
    const query = gql`
      {
        user(login: "cesarwbr") {
          pinnedItems(first: 4, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                forkCount
                homepageUrl
                primaryLanguage {
                  name
                  color
                }
                url
                stargazerCount
              }
            }
          }
        }
      }
    `;

    const data = await this.client.request(query);

    console.log({ data });

    return data.user.pinnedItems.nodes as GitHubRepository[];
  }

  public async fetchRepositoryContributors(
    repositoryName: string
  ): Promise<GithubContributor[]> {
    console.log({ repositoryName });
    const response = await fetch(
      `https://api.github.com/repos/cesarwbr/${repositoryName}/contributors`
    );
    const payload = await response.json();
    const items = payload as unknown as GithubContributor[];

    console.log({ items });

    return Array.isArray(items) ? items : [];
  }
}

export interface GithubContributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
  contributions: number;
}

export interface GitHubRepository {
  name: string;
  description: string;
  forkCount: number;
  homepageUrl: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
  url: string;
  stargazerCount: number;
}
