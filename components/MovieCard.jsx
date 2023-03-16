import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/CardContainer.module.css'

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} className={styles.link}>
      <div className={styles.CardContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={200}
          height={300}
          className={styles.movieImage}
        />
        <h4 className={styles.title}>{movie.title}</h4>
        <p className={styles.date}>{movie.release_date}</p>
      </div>
    </Link>
  )
}

export default MovieCard
