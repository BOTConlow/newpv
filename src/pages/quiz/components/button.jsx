import { useNavigate } from 'react-router-dom'
import style from '../styles/button.module.css'

export function Button() {

    const navigate = useNavigate()

    return (
        <div className={style.button}>

            <button onClick={() => navigate('/')}>
                Quero Descobrir a Solução Definitiva
            </button>
            
        </div>
    )
}