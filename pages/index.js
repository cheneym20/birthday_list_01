import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <div className={styles.title}>
          2 Birthdays Today
        </div>

        <div className={styles.birthday_list}>
          <li>
            <div className={styles.michael_profile}></div>
            <div className={styles.profile_text}>
              <b>Michael Cheney</b>
              <span>Age: 34</span>
            </div>

          </li>
          <li>
            <div className={styles.saia_profile}></div>
            <div className={styles.profile_text}>
              <b>Siosaia Fonua</b>
              <span>Age: 26</span>
            </div>

          </li>
        </div>

        <div className={styles.clear_btn}>
          Clear All
        </div>

      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
