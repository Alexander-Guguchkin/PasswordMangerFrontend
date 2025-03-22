import styles from "./NavBar.module.css"
import LinkProfile from "../LinkProfile/LinkProfile";
export default function NavBar({ navlist }) {
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
            <a className={styles.navbar__link} href="/profile">
                <LinkProfile name="Тестовый пользователь" />
            </a>
        </div>
    );
}