import style from '../styles/dermatologista.module.css'
import Image from '../../../assets/Dermatologista.png'
import Selo from '../../../assets/selo.webp'
import { Promocao } from './promocao'
import { useEffect, useState } from 'react'

const text3 = [{
    text: 'Dermatologista e Criadora do Protoclo Pele Perfeita, Membro da Sociedade Brasileira de Dermatologia, com anos de experiência e especializações em Longevidade Saudável, Fitoterapia e Medicina Quântica, incluindo a última tecnologia de peptídeos anti-acnes, a Doutora Karina Costa é considerada uma das melhores do Brasil na luta contra as acnes.'
}, {
    text: '"Eu desenvolvi o Protocolo Pele Perfeita com objetivo principal de ajudar as pessoas. Confie na minha experiência e especialização e experimente o Protocolo Pele Perfeita. Sua pele merece o melhor, e essa é a solução definitiva para isso."'
}]

export function Dermatologista() {

    const [time, setTime] = useState(false)

    useEffect(() => {

        setTimeout(() => {

            setTime(true)

        }, 1008000)

    }, [])

    return (
        <div className={style.content}>

            <div className={style.dermatologista}>
                <div>
                    <h1>
                        Conheça sua <span style={{ color: 'var(--red-400)' }}>dermatologista</span>
                    </h1>

                    <p style={{ fontSize: '1.5rem' }}>
                        <span style={{ color: 'var(--red-400)' }}><b>Dra. KARINA COSTA</b></span>
                    </p>

                    {text3.map((item, index) => (
                        <div key={item.text}>
                            <p>{item.text}</p>
                        </div>
                    ))}

                </div>
                <div className={style.image}>
                    <img
                        src={Image}
                    />
                </div>
            </div>

        </div>
    )
}