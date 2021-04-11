import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home({ spotlight, entertainment }) {
  console.log(spotlight[0]);
  return (
    <div>
      <Header />
      <main className={styles.site_content}>
        <div className={styles.site_content_inner}>
          <section className='main_content'>
            <div className={styles.main_top}>
              <div className={styles.main_top_inner}>
                {entertainment &&
                  entertainment.map((article) => (
                    <div className='article_container' key={article.title}>
                      <article className={styles.article}>
                        <div className={styles.article_image}>
                          <a href={article.url}>
                            {article.urlToImage && (
                              <img
                                src={article?.urlToImage}
                                alt={article?.title}
                              />
                            )}
                          </a>
                        </div>
                        <div className='article_info'>
                          <a href={article.url}>
                            <div className={styles.article_title}>
                              <h2>{article.title}</h2>
                            </div>
                            <div className={styles.article_description}>
                              {article.content && article.content.length > 80
                                ? `${article.content.slice(0, 85)}...`
                                : article.content}
                            </div>
                          </a>
                        </div>
                      </article>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.main_bottom}>
              <div className={styles.main_bottom_inner}>
                {spotlight && (
                  <>
                    <div
                      className={`${styles.spotlight_container} ${styles.spotlight_main}`}
                    >
                      <a href={spotlight[0].url}>
                        <h1 className={styles.spotlight_main_title}>
                          {spotlight[0].title}
                        </h1>
                        <p className={styles.spotlight_main_content}>
                          {spotlight[0].content.slice(0, 600)}
                        </p>
                      </a>
                    </div>
                    <div
                      className={`${styles.spotlight_container} ${styles.spotlight_border} ${styles.spotlight_main_image_container}`}
                    >
                      <a href={spotlight[0].url}>
                        <img
                          src={spotlight[0].urlToImage}
                          alt={spotlight[0].title}
                          className={styles.spotlight_main_image}
                        />
                        <p className={styles.spotlight_main_description}>
                          {spotlight[0].description}
                        </p>
                      </a>
                    </div>
                    <div
                      className={`${styles.spotlight_container} ${styles.spotlight_border} ${styles.spotlight_secondary}`}
                    >
                      <a href={spotlight[1].url}>
                        <h2 className={styles.spotlight_secondary_title}>
                          {spotlight[1].title}
                        </h2>
                        <p>{spotlight[1].description}</p>
                      </a>
                    </div>
                    <div
                      className={`${styles.spotlight_container} ${styles.spotlight_tertiary}`}
                    >
                      <a href={spotlight[2].url}>
                        <h2 className={styles.spotlight_tertiary_title}>
                          {spotlight[2].title}
                        </h2>
                        <p>{spotlight[2].description}</p>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=3&page=2`,
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
      spotlight: articles,
      entertainment: entertainmentJson.articles,
    },
  };
};
