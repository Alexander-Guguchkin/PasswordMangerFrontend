import styles from './InputText.module.css'
import {useState} from 'react'
export default function  InputText({placeholder, text}){
    const [inputValue, setValue] = useState(text)
    return (
        <>
            <input
                className={styles.inputText}
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
            />
        </>

    )
}