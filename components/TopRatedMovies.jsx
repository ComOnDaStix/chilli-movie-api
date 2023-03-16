import styles from "../styles/TopRatedMovies.module.css"
import MovieCard from "./MovieCard";

const TopRatedMovies = ({ movies }) => {
  return (  
    <div className={styles.container}>
      <h1 className={styles.TopRatedH1}>Top Rated Movies</h1>
      <div className={styles.moviesContainer}>
      {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
     
    </div>
  );
}
 
export default TopRatedMovies;