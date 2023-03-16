import styles from '../styles/ContnetList.module.css'
import cardContainer from '../styles/ContnetList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const ContnetList = ({ pageTitle, contentType, children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.TopRatedH1}>{pageTitle}</h1>
      <div className={styles.moviesContainer}>
        {children.map((item, i) => (
          <Link
            key={i}
            href={`/${contentType}/${item.id}`}
            className={styles.link}
          >
            <div className={cardContainer.CardContainer}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                width={200}
                height={300}
                className={cardContainer.movieImage}
                alt={item.name}
              />
              <h4 className={cardContainer.title}>{item.name}</h4>
              <p className={cardContainer.date}>{item.first_air_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ContnetList
