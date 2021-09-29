import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";

//Look up next/image for next js image handler.

export default function Home() {

  let birthday_people = [
    {
      name: "Michael Cheney",
      age: 34,
      image_source: "/michael.jpg"
    },
    {
      name: "Saia Fonua",
      age: 26,
      image_source: "/saia.jpg"
    }
  ]

  const handleClearAll = () => {
    setNumberOfBirthdays(0);
    setPerson([]);
  }

  const [person, setPerson] = useState(birthday_people);
  const [numberOfBirthdays, setNumberOfBirthdays] = useState(birthday_people.length);

  
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <div className={styles.title}>
          {numberOfBirthdays} Birthdays Today
        </div>

        {person.map((element) => {
          return (
            <div className={styles.birthday_list}>
              <li>
                <Image className={styles.profile_image} src={element.image_source} width={90} height={90} />
                <div className={styles.profile_text}>
                  <b>{element.name}</b>
                  <span>Age: {element.age}</span>
                </div>
              </li>
            </div>
          );
        })}

        <div className={styles.clear_btn} onClick={handleClearAll}>
          Clear All
        </div>

      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
