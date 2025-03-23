import styles from './InputPassword.module.css'
import {useState} from 'react'
export default function  InputPassword({placeholder, password}){
    const [inputValue, setValue] = useState(password)
    return (
        <>
            <input
                className={styles.inputPassword}
                type="password"
                placeholder={placeholder}
                value={inputValue}
            onChange={(e) => setValue(e.target.value)}/>
        </>

    )
}