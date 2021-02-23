import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wesledev.png" alt="Wesle Leal"/>
      <div>
        <strong>Wesle Leal</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
        
      </div>
    </div>
  )
}