import styles from './Profile.module.css'
import ProfileInfo from "../components/ProfileInfo/Profilenfo.jsx";
export default function Profile() {

    return (
        <div className={styles.profile}>
            <ProfileInfo title="Имя пользователя" description="Тестовый пользователь"/>
            <ProfileInfo title="Логин" description="Тестовый пользователь"/>
            <ProfileInfo title="Пароль" description="****"/>
        </div>
    )
}