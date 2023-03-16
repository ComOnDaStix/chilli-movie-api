import axios from "axios";
import server from "@/config";
import styles from "../../../styles/Movie.module.css";
import Image from "next/image";

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <div className={styles.image}>
          <div className={styles.h1Wrapper}>
            <h1 className={styles.h1}>{movie.title}</h1>
          </div>
          <div className={styles.overviewContainer}>
            <h3 className={styles.overview}>{movie.overview}</h3>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              width={1000}
              height={600}
              className={styles.image}
            />
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.date}>
          Release Date: <span>{movie.release_date}</span>
        </h4>
        <h4 className={styles.genres}>
          Genres:{" "}
          <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
        </h4>

        <h4 className={styles.runtime}>
          Runtime: <span>{movie.runtime}</span>
        </h4>
      </div>
    </div>
  );
};

export default Movie;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movie = res.data;

  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
