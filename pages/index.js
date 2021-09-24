import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";

//Look up next/image for next js image handler.

export default function Home() {

  let birthday_people = [
    {
      name: "Michael Cheney",
      age: 34,
      image_class: "michael_profile"
    },
    {
      name: "Saia Fonua",
      age: 26,
      image_class: "saia_profile"
    }
  ]

  const handleClearAll = () => {
    setNumberOfBirthdays(0);
  }

  const [person, setPerson] = useState(birthday_people);
  const [numberOfBirthdays, setNumberOfBirthdays] = useState(birthday_people.length);

  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <div className={styles.title}>
          {numberOfBirthdays} Birthdays Today
        </div>

        {birthday_people.map((element) => {
          return (
            <div className={styles.birthday_list}>
              <li>
                <div
                  className={`${
                    element.image_class === "michael_profile"
                      ? styles.michael_profile
                      : styles.saia_profile
                  } `}
                ></div>
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
