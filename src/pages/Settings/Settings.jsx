import styles from './Settings.module.css'
import  ButtonPrimary from '../../components/Button/ButtonPrimary.jsx'
export default function Settings (){
    return (
        <div className={styles.settings}>
            <ButtonPrimary text='Сменить тему'/>
        </div>
    )
}