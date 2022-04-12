import Image from "next/image";
import { useCallback, useMemo } from "react";
import { BiStar, BiGitRepoForked, BiCalendarStar } from "react-icons/bi";
import { GoStar, GoRepoForked } from "react-icons/go";
import { Project } from "../lib/projects";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const getContributors = useCallback((project: Project) => {
    const contributors = [...project.contributors].reverse();

    return contributors;
  }, []);

  function getFavicon(url: string) {
    return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=20`;
  }

  return (
    <div className="projects--container">
      <h2 className="title">Recent Projects</h2>
      <ol className="projects">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.url}
              target="_blank"
              className="project"
              rel="noreferrer"
            >
              <header>
                <Image
                  src={getFavicon(project.homepageUrl)}
                  width={20}
                  height={20}
                  layout="fixed"
                  alt={project.name}
                />
                <h3 className="project--info--title">{project.name}</h3>
              </header>
              <section className="project--description">
                {project.description}
              </section>
              <footer>
                <section className="project--info">
                  <div className="project--info--item">
                    <div
                      className="project--info--main-lang--color"
                      style={{ backgroundColor: project.primaryLanguage.color }}
                    />
                    <div className="project--info--label">
                      {project.primaryLanguage.name}
                    </div>
                  </div>
                  <div className="project--info--item">
                    <GoStar size={16} color="#fdcb17" />
                    <div className="project--info--label">
                      {project.stargazerCount}
                    </div>
                  </div>
                  <div className="project--info--item">
                    <GoRepoForked size={16} />
                    <div className="project--info--label">
                      {project.forkCount}
                    </div>
                  </div>
                </section>
                <section className="project--contributors">
                  {getContributors(project).map((contributor, index) => (
                    <a
                      className="project--contributor"
                      style={{ right: `${20 * index}px` }}
                      key={contributor.id}
                      href={contributor.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={contributor.avatar_url}
                        width={26}
                        height={26}
                        alt={contributor.login}
                        layout="fill"
                      />
                    </a>
                  ))}
                </section>
              </footer>
            </a>
          </li>
        ))}
      </ol>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          color: var(--main-primary-color);
          margin-bottom: 24px;
          margin-top: 0;
        }

        .projects--container {
          margin-top: 120px;
          font-size: 14px;
        }

        .projects {
          display: flex;
          width: 100%;
          gap: 20px;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .projects > li {
          width: 49%;
        }

        @media screen and (max-width: 1024px) {
          .projects > li {
            width: 100%;
          }
        }

        .project {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 8px 0px,
            rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s ease 0s, transform 0.2s ease 0s;
          padding: 12px 14px;
          background: var(--article-bg-color);
        }

        .project:focus {
          border: 3px solid var(--highlight-color);
          outline: none;
        }

        .project:hover {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 12px 0px,
            rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
          transform: translateY(-4px);
        }

        header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project--info--title {
          color: var(--article-primary-color);
          font-weight: 700;
          letter-spacing: -0.5px;
          margin: 0;
          padding: 0;
        }

        .project--description {
          margin: 14px 0;
          color: var(--project-description-color);
          height: 60px;
        }

        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project--info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project--info--item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .project--info--main-lang--color {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .project--info--label {
          color: var(--project-description-color);
        }

        .project--info--item :global(svg) {
          color: var(--project-description-color);
        }

        .project--contributors {
          position: relative;
          height: 24px;
        }

        .project--contributor {
          position: absolute;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          right: 0;
          top: 0;
          overflow: hidden;
          border: 2px solid var(--article-bg-color);
        }
      `}</style>
    </div>
  );
}
