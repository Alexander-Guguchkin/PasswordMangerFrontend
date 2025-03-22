import styles from "./LinkProfile.module.css";
import { UserCircle } from 'lucide-react';

export default function Profile({ name }) {
    return (
        <div className={styles.profile}>
            <div className={styles.avatar}>
                <UserCircle />
            </div>
            <div className={styles.name}>
                {name}
            </div>
        </div>
    );
}