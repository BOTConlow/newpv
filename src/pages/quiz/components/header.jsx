import style from '../styles/header.module.css'

export function Header() {
    return (

        <div className={style.content}>

            <div className={style.header}>
                <h1>
                    Beleza & Saúde
                </h1>
            </div>

            <div className={style.subheader}>
                <h2>
                    Dra. Vanessa Perusso
                </h2>
            </div>

        </div>

    )
}