import Image from "next/image";
import dayjs from "dayjs";

import styles from "./articles.module.css";
import { Article } from "../../lib/articles";

type Props = {
  allArticles: Article[];
};

export default function Articles({ allArticles }: Props) {
  function formatPubDate(pubDate: string | Date) {
    return dayjs(pubDate).format("MMMM DD, YYYY");
  }
  return (
    <div className={styles["articles--container"]}>
      <h2 className={styles["title"]}>Recent Posts</h2>
      <div className={styles["articles"]}>
        {allArticles.map((article, index) => (
          <a
            href={article.link}
            target="_blank"
            key={article.title}
            className={styles["article"]}
            rel="noreferrer"
          >
            <div className={styles["article--image"]}>
              <Image
                alt={article.title}
                src={article.thumbnail}
                layout="fill"
                sizes={`(max-width: 768px) 340px, (max-width: 1024px) 340px, ${
                  index !== 0 ? "400px" : "800px"
                }`}
                objectFit="contain"
              />
            </div>
            <div className={styles["article--info"]}>
              <h3 className={styles["article--info--title"]}>
                {article.title}
              </h3>
              <p className={styles["article--info--date"]}>
                {formatPubDate(article.pubDate)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
