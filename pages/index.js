import styles from '../styles/Home.module.scss'
import enterUser from "../scripts/enterUser";
import {useRef} from "react";

export default function Home() {

    const name = useRef()

    return (
      <div className={styles.container}>
          <div className={styles.insideContainer}>
              <input type={'text'} placeholder={'Name'} className={styles.login} ref={name}/>
              <button className={styles.button} onClick={()=> enterUser(name.current.value)}>Enter</button>
          </div>
      </div>
  )
}
