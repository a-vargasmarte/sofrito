import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Sofrito</title>
        <meta
          name="keywords"
          content="food recipes, tips, and recommendations for many cooking styles and levels"
        />
      </Head>
      {articles.map((article, i) => (
        <h3 key={i}>{article.title}</h3>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
};
