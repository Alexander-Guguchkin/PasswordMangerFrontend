import styles from './ProfileInfo.module.css'

export  default function  ProfileInfo({title, description}) {
    return (
        <div className={styles.profile__info}>
            <div className={styles.profile__title}>{title}:</div>
            <div className={styles.profile__description}>{description}</div>
        </div>
    )
}