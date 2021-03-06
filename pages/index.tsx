import { useMemo } from "react";
import Head from "next/head";
import { getAllArticles, Article } from "../lib/articles";
import Footer from "../components/footer";
import Header from "../components/header";
import { GetStaticProps } from "next";
import Profile from "../components/profile";
import Articles from "../components/articles";
import CurrentlyPlayingSong from "../components/currently-playing";
import { getArticlesJSONLD } from "../utils/jsonld";

export const getStaticProps: GetStaticProps = async () => {
  const [allArticles] = await Promise.all([getAllArticles()]);
  return {
    props: {
      allArticles,
    },
  };
};

type Props = {
  allArticles: Article[];
};

export default function Home({ allArticles }: Props) {
  const { articlesJSONLD, organizationJSONLD } = useMemo(() => {
    return getArticlesJSONLD(allArticles);
  }, [allArticles]);

  const title = "Cesar William Alvarenga";
  const description =
    "Hey, I'm Cesar. I'm a software engineer, builder, and occasional writer.";
  const image =
    "https://s.gravatar.com/avatar/a18e1d0e81914e7a108ef59e5e4a8bc3?s=1200";

  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="robots" content="index,follow"></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta
          data-react-helmet="true"
          property="og:site_name"
          content={title}
        />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://www.cesarwilliam.com"
        />
        <meta data-react-helmet="true" property="og:image" content={image} />
        <meta data-react-helmet="true" name="twitter:title" content={title} />
        <meta data-react-helmet="true" name="twitter:card" content="summary" />
        <meta
          data-react-helmet="true"
          name="twitter:description"
          content={description}
        />
        <meta
          data-react-helmet="true"
          name="twitter:site"
          content="@cesarwbr"
        />
        <meta
          data-react-helmet="true"
          name="twitter:creator"
          content="@cesarwbr"
        />
        <meta
          data-react-helmet="true"
          name="twitter:image:src"
          content={image}
        />
        <meta
          data-react-helmet="true"
          name="msapplication-TileColor"
          content="#da532c"
        />
        <meta data-react-helmet="true" name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="mcFqnSQfhKdWTQcZXzvRaGngL-vBw4w9HBAphsVeBPo"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJSONLD }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: articlesJSONLD }}
        />
      </Head>

      <Header />

      <main>
        <Profile />

        <Articles allArticles={allArticles} />
      </main>

      <CurrentlyPlayingSong />

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: calc(100% - 40px);
          margin: 0 auto;
          padding-bottom: 44px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        @media screen and (min-width: 768px) {
          .container {
            max-width: 700px;
            width: 100%;
          }
        }

        @media screen and (min-width: 1024px) {
          .container {
            max-width: 1000px;
          }
        }

        @media screen and (min-width: 1280px) {
          .container {
            max-width: 1200px;
          }
        }
      `}</style>

      <style jsx global>{`
        :root {
          --main-bg-color: white;
          --main-primary-color: black;
          --main-secondary-color: #757575;
          --article-primary-color: #111;
          --article-secondary-color: #757575;
          --article-bg-color: white;
          --footer-color: rgb(95, 101, 109);
          --light-border-color: #e2e8f0;
          --white-border: rgb(255, 255, 255);
          --highlight-color: #ffc107;
        }

        [data-theme="dark"] {
          --main-bg-color: #121212;
          --main-primary-color: #f4f4f6;
          --main-secondary-color: #8999b0;
          --article-primary-color: #f3f3f5;
          --article-secondary-color: #a5a8b4;
          --article-bg-color: #242424;
          --footer-color: #8b8e9a;
          --light-border-color: #67696f;
          --white-border: rgba(255, 255, 255, 0.8);
          --highlight-color: #ffc107;
        }

        html,
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: var(--main-bg-color);
          transition: background 0.5s;
        }

        * {
          box-sizing: border-box;
        }

        .article--image img {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
