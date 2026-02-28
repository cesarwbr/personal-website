import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

import styles from "./articles.module.css";
import { Article } from "../../api/lib/articles";
import MotionWrapper from "../motion-wrapper/motion-wrapper";

type Props = {
  allArticles: Article[];
};

export default function Articles({ allArticles }: Props) {
  function formatPubDate(pubDate: string | Date) {
    return dayjs(pubDate).format("MMMM DD, YYYY");
  }
  return (
    <div className={styles["articles--container"]}>
      <MotionWrapper>
        <div className={styles["section-header"]}>
          <div className={styles["section-label"]}>Blog</div>
          <h2 className={styles["title"]}>Recent Posts</h2>
        </div>
      </MotionWrapper>
      <div className={styles["articles"]}>
        {allArticles.map((article, index) => (
          <MotionWrapper key={article.title} delay={0.1 + index * 0.08}>
            <Link
              href={article.link}
              target="_blank"
              className={styles["article"]}
              rel="noreferrer"
            >
              <div className={styles["article--image"]}>
                <Image
                  alt={article.title}
                  src={article.thumbnail}
                  fill={true}
                  sizes={`(max-width: 768px) 340px, (max-width: 1024px) 340px, ${
                    index !== 0 ? "400px" : "800px"
                  }`}
                />
                <div className={styles["article--overlay"]} />
              </div>
              <div className={styles["article--info"]}>
                <h3 className={styles["article--info--title"]}>
                  {article.title}
                </h3>
                <div className={styles["article--meta"]}>
                  <p className={styles["article--info--date"]}>
                    {formatPubDate(article.pubDate)}
                  </p>
                  <span className={styles["article--read-more"]}>
                    Read article
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}
