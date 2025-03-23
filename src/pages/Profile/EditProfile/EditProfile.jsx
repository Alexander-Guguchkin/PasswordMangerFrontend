import styles from "./EditProfile.module.css";
import ButtonPrimary from "../../../components/Button/ButtonPrimary.jsx";
import InputText from "../../../components/Input/InputText/InputText.jsx";
import InputPassword from "../../../components/Input/InputPassword/InputPassword.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export default function EditProfile() {
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
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз
    return (
        <div className={styles.editProfile}>
            <h2>Редактирование профиля</h2>
            {profile ? (
                <>
                    <form action="" className={styles.editProfile__form}>
                        <label htmlFor="">
                            <InputText placeholder="Имя пользователя" text={profile.name} />
                        </label>
                        <label htmlFor="">
                            <InputText placeholder="Логин" text={profile.email} />
                        </label>
                        <label htmlFor="">
                            <InputPassword placeholder="Введите новый пароль" password={profile.password} />
                        </label>
                        <label htmlFor="">
                            <InputPassword placeholder="Подтвердить новый пароль" password={profile.password} />
                        </label>
                        {/*TODO: сделать редактирование input*/}
                        {/*TODO: сделать очистку input*/}
                        <ButtonPrimary text="Отправить" type="submit"/>
                    </form>
                </>
            ):(
                <p>Загрузка...</p>
            )}

        </div>
    )
}