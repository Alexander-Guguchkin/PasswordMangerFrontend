import style from './ButtonPrimary.module.css'
export default function ButtonPrimary({text}){
    return (
        <div>
            <button className={style.buttonPrimary}>
                {text}
            </button>
        </div>
    )
}