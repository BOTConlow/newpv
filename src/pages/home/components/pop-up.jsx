import { CircleWavyCheck } from 'phosphor-react'
import { useEffect, useState } from 'react'
import style from '../styles/pop-up.module.css'

export function PopUp({ name }) {

    const [desapear, setDesapear] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDesapear(true)
        }, 4500)
    }, [])


    return (

        <div className={`${style.content} ${desapear && style.desapearAnim}`}>

            <div className={style.box}>
                <CircleWavyCheck size={25} weight="fill" /> <h4><u>{name}</u> acabou de Obter</h4>
            </div>

        </div>
    )
}