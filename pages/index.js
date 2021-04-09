import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home({ topStories, entertainment }) {
  console.log(entertainment);
  return (
    <div>
      <Header />
      <main className='site_content'>
        <div className=''>
          <section className='main_content'></section>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us`,
    {
      headers: {
        Authorization: `Bearer 2661d5f8160446879369681b2cb660d2`,
      },
    }
  );
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;

  const entertainmentResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=3&page=1`,
    {
      headers: {
        Authorization: `Bearer 2661d5f8160446879369681b2cb660d2`,
      },
    }
  );

  const entertainmentJson = await entertainmentResponse.json();

  return {
    props: {
      topStories: articles,
      entertainment: entertainmentJson,
    },
  };
};
