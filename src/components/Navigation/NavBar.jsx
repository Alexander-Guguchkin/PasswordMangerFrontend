import styles from "./NavBar.module.css"
import Profile from "../Profile/Profile";
export default function NavBar({ navlist }) {
    if (!navlist || navlist.length === 0) {
        return <p>Навигация отсутствует</p>;
    }

    return (
        <div className={styles.navbar}>
            <ul>
                {navlist.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
            <Profile href="/profile" name="Тестовый пользователь"/>
        </div>
    );
}