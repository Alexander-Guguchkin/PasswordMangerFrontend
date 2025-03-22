import  {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Это страница ошибки</h1>
            <h2>404 Not Found Error</h2>
            <p>
                <i>{error.statusText}</i>
            </p>
            <p>
                <i>
                    {error.data}
                </i>
            </p>
        </div>
    );
}