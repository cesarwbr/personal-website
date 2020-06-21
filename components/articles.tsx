import dayjs from "dayjs";

import { Article } from "../lib/articles";

type Props = {
  allArticles: Article[];
};

export default function Articles({ allArticles }: Props) {
  function formatPubDate(pubDate: string) {
    return dayjs(pubDate).format("MMMM DD, YYYY");
  }

  return (
    <div className="articles--container">
      <h4 className="title">Recent Posts</h4>
      <div className="articles">
        {allArticles.map((article) => (
          <a
            href={article.link}
            target="__blank"
            key={article.title}
            className="article"
          >
            <div
              className="article--image"
              style={{
                background: `url(${article.thumbnail}) center center / cover`,
              }}
            />
            <div className="article--info">
              <div className="article--info--title">{article.title}</div>
              <div className="article--info--date">
                {formatPubDate(article.pubDate)}
              </div>
            </div>
          </a>
        ))}
      </div>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          font-size: 28px;
          color: black;
          margin-bottom: 28px;
          margin-top: 0;
        }

        .articles--container {
          margin-top: 120px;
        }

        .articles {
          display: grid;
          width: 100%;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media screen and (min-width: 600px) {
          .articles {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (min-width: 1024px) {
          .articles {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        .article {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 8px 0px,
            rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s ease 0s, transform 0.2s ease 0s;
        }

        @media screen and (min-width: 1024px) {
          .article:first-child {
            grid-column: auto / span 2;
          }
        }

        .article:hover {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 12px 0px,
            rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
          transform: translateY(-4px);
        }

        .article--info {
          padding: 36px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .article--info--title {
          color: #111;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        .article--info--date {
          color: #999;
          font-size: 12px;
          line-height: 1;
          margin: 6px 0px 0px;
        }

        .article--overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .article--image {
          object-fit: cover;
          height: 280px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
