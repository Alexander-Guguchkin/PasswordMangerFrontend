import styles from "./Profile.module.css";
import { UserCircle } from 'lucide-react';

export default function Profile( {href, name} ) {
    return (
        <a href={href}>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <UserCircle />
                </div>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
        </a>
    );
}