import style from '../styles/headline.module.css'
import { Button } from '../../../components/button'
import { Vsl } from './vsl'
import { useEffect } from 'react'
import { useState } from 'react'

export function Headline() {

    const [time, setTime] = useState(false)

    useEffect(() => {

        setTimeout(() => {

            setTime(true)

        }, 960000)

    }, [])

    return (
        <div className={style.content}>

            <div className={style.headline}>
                <h1>ASSISTA E DESCUBRA</h1>
                <h2>Como <u>Jovens e Adultos</u> Estão Conquistando Uma <span style={{ color: 'var(--red-400)' }}>Pele Lisa e Limpa</span> Em Casa <u>Sem precisar De Roacutan</u></h2>
            </div>

            <Vsl />

            <p>ATENÇÃO: Esse vídeo poderá sair do ar a qualquer momento</p>

            {time && <>


                <Button
                    title='Clique aqui para acabar com as espinhas!'
                />

            </>}

        </div>
    )
}
