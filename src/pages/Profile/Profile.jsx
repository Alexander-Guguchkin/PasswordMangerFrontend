import styles from './Profile.module.css';
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo.jsx";
import axios from "axios";
import React, { useState, useEffect } from 'react';

export default function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Выполняем запрос только один раз при монтировании компонента
        axios.get("http://127.0.0.1:8000/api/profile")
            .then((res) => {
                setProfile(res.data[0]); // Сохраняем весь объект профиля
            })
            .catch((error) => {
                console.error("Ошибка при загрузке профиля:", error);
            });
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

    return (
        <div className={styles.profile}>
            {profile ? (
                <>
                    <ProfileInfo title="Имя пользователя" description={profile.name || 'Не указано'} />
                    <ProfileInfo title="Логин" description={profile.email || 'Не указано'} />
                    <ProfileInfo title="Пароль" description="****" />
                </>
            ) : (
                <p>Загрузка...</p> // Показываем индикатор загрузки, пока данные не загружены
            )}
        </div>
    );
}
