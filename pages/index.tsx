import Head from "next/head";
import { getAllArticles, Article } from "../lib/articles";
import Footer from "../components/footer";
import Header from "../components/header";
import Profile from "../components/profile";
import Articles from "../components/articles";

export async function getServerSideProps(context) {
  const allArticles = await getAllArticles();
  return {
    props: {
      allArticles,
    },
  };
}

type Props = {
  allArticles: Article[];
};

export default function Home({ allArticles }: Props) {
  return (
    <div className="container">
      <Head>
        <title>Cesar William</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Profile />

        <Articles allArticles={allArticles} />
      </main>

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
        html,
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
