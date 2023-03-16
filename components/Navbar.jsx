import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={'/movielogo.png'} width={223} height={58} />
      </div>

      <ul className={styles.list}>
        <Link className={styles.link} href='/'>
          <li className={styles.listItems}>Home</li>
        </Link>
        <Link className={styles.link} href='/tv-shows'>
          <li className={styles.listItems}>TV Shows</li>
        </Link>
        <Link className={styles.link} href='/more-movies'>
          <li className={styles.listItems}>More Movies</li>
        </Link>
        <Link className={styles.link} href='/about'>
          <li className={styles.listItems}>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
