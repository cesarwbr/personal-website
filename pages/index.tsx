import { useMemo } from "react";
import Head from "next/head";
import Script from "next/script";
import { getAllArticles, Article } from "../lib/articles";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { GetStaticProps } from "next";
import Profile from "../components/profile/profile";
import Articles from "../components/articles/articles";
import CurrentlyPlayingSong from "../components/currently-playing/currently-playing";
import { getArticlesJSONLD } from "../utils/jsonld";
import Projects from "../components/projects/projects";
import { getAllProjects, Project } from "../lib/projects";
import styles from "../styles/home.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const allArticles = await getAllArticles();
  const allProjects = await getAllProjects();

  return {
    props: {
      allArticles,
      allProjects,
    },
  };
};

type Props = {
  allArticles: Article[];
  allProjects: Project[];
};

export default function Home({ allArticles, allProjects }: Props) {
  const { articlesJSONLD, organizationJSONLD } = useMemo(() => {
    return getArticlesJSONLD(allArticles);
  }, [allArticles]);

  const title = "Cesar Alvarenga - Software Engineer | Web Development";
  const description =
    "Software engineer specializing in front-end web development with JavaScript, TypeScript, and React. Explore my projects and articles.";
  const image =
    "https://s.gravatar.com/avatar/a18e1d0e81914e7a108ef59e5e4a8bc3?s=1200";

  return (
    <div className={styles["container"]}>
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
        <meta
          data-react-helmet="true"
          name="keywords"
          content="software engineer, web development, JavaScript, TypeScript, React, design patterns, front-end development"
        ></meta>
        <meta data-react-helmet="true" name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="mcFqnSQfhKdWTQcZXzvRaGngL-vBw4w9HBAphsVeBPo"
        />

        <link rel="canonical" href="https://cesarwilliam.com/" />
      </Head>

      <Script
        id="organizationJSONLD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationJSONLD }}
      />
      <Script
        id="articlesJSONLD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articlesJSONLD }}
      />
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=UA-67252968-1`}
      />
      <Script
        id="datalayer"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-67252968-1', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Header />

      <main className={styles["main"]}>
        <Profile />

        <Projects projects={allProjects} />
        <Articles allArticles={allArticles} />
      </main>

      <CurrentlyPlayingSong />

      <Footer />
    </div>
  );
}
