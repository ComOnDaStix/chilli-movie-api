import axios from 'axios'
import server from '@/config'
import styles from '../../styles/Movie.module.css'
import Image from 'next/image'

const Item = ({ data: movie }) => {
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
              alt={movie.title}
            />
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.date}>
          Release Date: <span>{movie.release_date}</span>
        </h4>
        <h4 className={styles.genres}>
          Genres:{' '}
          <span>{movie.genres.map((genre) => genre.name).join(', ')}</span>
        </h4>

        <h4 className={styles.runtime}>
          Runtime: <span>{movie.runtime}</span>
        </h4>
      </div>
    </div>
  )
}

export default Item

export async function getServerSideProps({ query: { contentType, id } }) {
  try {
    // this sets the default to movie
    let urlType = 'movie'
    // this changes based off the route you are on.
    if (contentType === 'TvShows') {
      urlType = 'tv'
    }
    const { data } = await axios(
      `${server}/${urlType}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )

    return {
      props: { data },
    }
  } catch (err) {
    console.error(err)
    return {
      props: {},
    }
  }
}
