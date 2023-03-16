import axios from "axios";
import server from "@/config";
import styles from "../../styles/Movie.module.css"
import Image from "next/image";

const TvShow = ({ tvShow }) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <div className={styles.image}>
          <div className={styles.h1Wrapper}>
            <h1 className={styles.h1}>{tvShow.name}</h1>
          </div>
          <div className={styles.overviewContainer}>
            <h3 className={styles.overview}>{tvShow.overview}</h3>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
              width={1000}
              height={600}
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.date}>
          First Air Date: <span>{tvShow.first_air_date}</span>
        </h4>
        <h4 className={styles.genres}>
          Genres:{" "}
          <span>
            {tvShow.genres.map((genre) => genre.name).join(", ")}
          </span>
        </h4>

        <h4 className={styles.runtime}>
          Episode Runtime: <span>{tvShow.episode_run_time[0]} minutes</span>
        </h4>
      </div>
    </div>
  );
};

export default TvShow;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/tv/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const tvShow = res.data;

  return {
    props: { tvShow },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const tvShows = res.data.results;

  const ids = tvShows.map((tvShow) => tvShow.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}