import Image from "next/image";
import { useCallback } from "react";
import { GoStar, GoRepoForked } from "react-icons/go";
import { Project } from "../../api/lib/projects";
import styles from "./projects.module.css";
import Link from "next/link";

type Props = {
  projects: Project[];
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
      <h2 className={styles["title"]}>Projects</h2>
      <ol className={styles["projects"]}>
        {projects.map((project) => (
          <li key={project.name}>
            <Link
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={styles["project"]}
            >
              <header className={styles["projects--header"]}>
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
                      <GoStar size={16} color="#fdcb17" />
                      <div className={styles["project--info--label"]}>
                        {project.stargazerCount}
                      </div>
                    </div>
                    <div className={styles["project--info--item"]}>
                      <GoRepoForked size={16} />
                      <div className={styles["project--info--label"]}>
                        {project.forkCount}
                      </div>
                    </div>
                  </section>
                  <section className={styles["project--contributors"]}>
                    {getContributors(project).map((contributor, index) => (
                      <div
                        className={styles["project--contributor"]}
                        style={{ right: `${20 * index}px` }}
                        key={contributor.id}
                      >
                        <Image
                          src={contributor.avatar_url}
                          alt={contributor.login}
                          width={28}
                          height={28}
                        />
                      </div>
                    ))}
                  </section>
                </footer>
              )}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
