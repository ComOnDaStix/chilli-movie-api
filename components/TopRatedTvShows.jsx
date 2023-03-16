import styles from "../styles/TopRatedMovies.module.css";
import TvShowCard from "./TvShowCard";

const TopRatedTVShows = ({ tvShows }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.TopRatedH1}>Top Rated TV Shows</h1>
      <div className={styles.moviesContainer}>
        {tvShows.map((tvShow) => (
          <TvShowCard item={tvShow} key={tvShow.id} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedTVShows;
