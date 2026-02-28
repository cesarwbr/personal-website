import Image from "next/image";
import { useCallback } from "react";
import { GoStar, GoRepoForked } from "react-icons/go";
import { Project } from "../../api/lib/projects";
import styles from "./projects.module.css";
import Link from "next/link";
import MotionWrapper from "../motion-wrapper/motion-wrapper";

type Props = {
  projects: Project[];
};

const FEATURED_PROJECT = {
  name: "My Avatar",
  description:
    "AI-powered platform to create your digital avatar. Engage your audience with text, voice, and video conversations that reflect your personality. Built with LangChain, LangGraph, and MCP.",
  url: "https://myavatar.ai",
  tags: ["LangChain", "LangGraph", "MCP", "Python", "GPT"],
};

export default function Projects({ projects }: Props) {
  const getContributors = useCallback((project: Project) => {
    const contributors = [...project.contributors].reverse();

    return contributors;
  }, []);

  function getFavicon(url: string) {
    return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(
      url
    )}&size=20`;
  }

  return (
    <div className={styles["projects--container"]}>
      <MotionWrapper>
        <div className={styles["section-header"]}>
          <div className={styles["section-label"]}>Portfolio</div>
          <h2 className={styles["title"]}>Projects</h2>
        </div>
      </MotionWrapper>

      <MotionWrapper delay={0.1}>
        <Link
          href={FEATURED_PROJECT.url}
          target="_blank"
          rel="noreferrer"
          className={styles["featured-project"]}
        >
          <div className={styles["featured-project--glow"]} />
          <div className={styles["featured-project--content"]}>
            <header className={styles["featured-project--header"]}>
              <div className={styles["featured-project--icon-wrapper"]}>
                <Image
                  src={getFavicon(FEATURED_PROJECT.url)}
                  width={24}
                  height={24}
                  alt={FEATURED_PROJECT.name}
                  className={styles["project--image"]}
                />
              </div>
              <div>
                <h3 className={styles["featured-project--title"]}>
                  {FEATURED_PROJECT.name}
                </h3>
                <span className={styles["featured-project--badge"]}>
                  Featured
                </span>
              </div>
            </header>
            <section className={styles["featured-project--description"]}>
              {FEATURED_PROJECT.description}
            </section>
            <div className={styles["featured-project--tags"]}>
              {FEATURED_PROJECT.tags.map((tag) => (
                <span key={tag} className={styles["featured-project--tag"]}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </MotionWrapper>

      <ol className={styles["projects"]}>
        {projects.map((project, index) => (
          <li key={project.name}>
            <MotionWrapper delay={0.2 + index * 0.08}>
              <Link
                href={project.url}
                target={project.type === "app" ? "_self" : "_blank"}
                rel="noreferrer"
                className={styles["project"]}
              >
                <div className={styles["project--glow"]} />
                <header className={styles["projects--header"]}>
                  <div className={styles["project--icon-wrapper"]}>
                    <Image
                      src={
                        project.type === "repository"
                          ? getFavicon(project.homepageUrl)
                          : project.imageUrl
                      }
                      width={20}
                      height={20}
                      alt={project.name}
                      className={styles["project--image"]}
                      style={
                        project.type === "app"
                          ? {
                              borderRadius: "0",
                            }
                          : {}
                      }
                    />
                  </div>
                  <h3 className={styles["project--info--title"]}>
                    {project.name}
                  </h3>
                </header>
                <section className={styles["project--description"]}>
                  {project.description}
                </section>
                {project.type === "repository" && (
                  <footer className={styles["projects--footer"]}>
                    <section className={styles["project--info"]}>
                      <div className={styles["project--info--item"]}>
                        <div
                          className={styles["project--info--main-lang--color"]}
                          style={{
                            backgroundColor: project.primaryLanguage.color,
                          }}
                        />
                        <div className={styles["project--info--label"]}>
                          {project.primaryLanguage.name}
                        </div>
                      </div>
                      <div className={styles["project--info--item"]}>
                        <GoStar size={14} color="#fdcb17" />
                        <div className={styles["project--info--label"]}>
                          {project.stargazerCount}
                        </div>
                      </div>
                      <div className={styles["project--info--item"]}>
                        <GoRepoForked size={14} />
                        <div className={styles["project--info--label"]}>
                          {project.forkCount}
                        </div>
                      </div>
                    </section>
                    <section className={styles["project--contributors"]}>
                      {getContributors(project).map((contributor, index) => (
                        <div
                          className={styles["project--contributor"]}
                          style={{ right: `${18 * index}px` }}
                          key={contributor.id}
                        >
                          <Image
                            src={contributor.avatar_url}
                            alt={contributor.login}
                            width={26}
                            height={26}
                          />
                        </div>
                      ))}
                    </section>
                  </footer>
                )}
              </Link>
            </MotionWrapper>
          </li>
        ))}
      </ol>
    </div>
  );
}
