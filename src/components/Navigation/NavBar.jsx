import styles from "./NavBar.module.css"
import LinkProfile from "../LinkProfile/LinkProfile";
import {useEffect, useState} from "react";
import axios from "axios";
export default function NavBar({ navlist }) {
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
    }, []);
    if (!navlist || navlist.length === 0) {
        return <p>Навигация отсутствует</p>;
    }

    return (
        <div className={styles.navbar}>
            <ul className={styles.navbar__list}>
                {navlist.map((item, index) => (
                    <li key={index}>
                        <a className={styles.navbar__link} href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
            {
                profile ? (
                    <a className={styles.navbar__link} href="/profile">
                        <LinkProfile name={profile.name} />
                    </a>
                ):(
                    <p>Загрузка...</p>
                )
            }

        </div>
    );
}