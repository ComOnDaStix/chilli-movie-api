import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CardContainer.module.css";

const TvShowCard = ({ item }) => {
  return (
    <Link href={`/TvShows/${item.id}`} className={styles.link}>
      <div className={styles.CardContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          width={200}
          height={300}
          className={styles.movieImage}
        />
        <h4 className={styles.title}>{item.name}</h4>
        <p className={styles.date}>{item.first_air_date}</p>
      </div>
    </Link>
  );
};

export default TvShowCard;