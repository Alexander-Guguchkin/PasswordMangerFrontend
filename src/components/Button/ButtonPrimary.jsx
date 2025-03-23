import style from './ButtonPrimary.module.css'
export default function ButtonPrimary({text, type}) {
    return (
        <div>
            <button type={type} className={style.buttonPrimary} >
                {text}
            </button>
        </div>
    )
}