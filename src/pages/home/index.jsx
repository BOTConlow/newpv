import React, { useEffect, useState } from 'react'
import style from '../../styles/app.module.css'
import { Header } from './components/header'
import { Background } from '../../components/backgrounds'
import { Depoimentos } from './components/depoimentos'
import { Passos } from './components/passos'
import { Beneficios } from './components/beneficios'
import { Poderoso } from './components/poderoso'
import { Acesso } from './components/acesso'
import { Bonus } from './components/bonus'
import { Duvidas } from './components/duvidas'
import { Grupo } from './components/grupo'
import { Quantovale } from './components/quantovale'
import { Headline } from './components/headline'
import { Depoimentos2 } from './components/comments/depoimentos2'
import { Dermatologista } from './components/dermatologista'
import { PopUp } from './components/pop-up'
import { Promocao } from './components/promocao'
import { Garantia } from './components/garantia'

export function HomePage() {

    const [loop, setLoop] = useState(false)
    const [time, setTime] = useState(false)
    const [timePage, setTimePage] = useState(false)
    const [nameToBuy, setNameToBuy] = useState('')

    useEffect(() => {

        let timeout = setTimeout(() => {
            setLoop(!loop)

            const randomName = [
                "João Silva",
                "Maria Santos",
                "Carlos Oliveira",
                "Lucas Rodrigues",
                "Juliana Nunes",
                "Pedro Souza",
                "Gabriela Ferreira",
                "Rafael Costa",
                "Ana Paula",
                "Bruno Gonçalves",
                "Eduardo Pereira",
                "Julio Cesar",
                "Luana Alves",
                "Mateus Machado",
                "Ricardo Almeida",
                "Sabrina Oliveira",
                "Thiago Carvalho",
                "Vinicius Torres",
                "Letícia Rocha",
                "Victor Gomes",
                "Fernanda Borges",
                "Luan Fernandes",
                "Larissa Barros",
                "Bianca Andrade",
                "Rafaela Soares",
                "Rayssa Freitas",
                "Ricardo Costa",
                "Julia Pinto",
                "Diego Ferreira",
                "Isabella Mendes"
            ];

            setNameToBuy(randomName[Math.floor(Math.random() * randomName.length)])
        }, 12000)

        timeout

        return () => {
            clearTimeout(timeout)
        }

    }, [loop])

    useEffect(() => {

        setTimeout(() => {

            setTime(true)

        }, 960000)

    }, [])

    return (
        <div>

            <Header />

            <Background bgImage='background1'>

                <div className={style.container}>

                    <Headline />

                    <Depoimentos2 />

                </div>

            </Background>

            {time && <>

                <Background bgImage='background1'>

                    <div className={style.container}>

                        <Garantia />

                    </div>

                </Background>

            </>}


            <Background bgImage='background3'>

                <div className={style.container}>

                    <Depoimentos />

                </div>

            </Background>

            {time && <>

                <Background bgImage='background1'>

                    <div className={style.container}>

                        {
                            loop && <PopUp name={nameToBuy} />
                        }

                        <Beneficios />

                        <Passos />

                        <Poderoso />

                    </div>

                </Background>

            </>}

            {time && <>

                <Background bgImage='background3'>

                    <div className={style.container}>

                        <Acesso />

                    </div>

                </Background>

            </>}

            {time && <>

                <Background bgImage='background1'>

                    <div className={style.container}>


                        <Dermatologista />

                        <Bonus />



                    </div>

                </Background>

            </>}

            {time && <>

                <Background bgImage='background3'>

                    <div className={style.container}>

                        <Grupo />

                    </div>

                </Background>

            </>}

            {time && <>

                <Background bgImage='background1'>

                    <div className={style.container}>

                        <Quantovale />

                    </div>

                </Background>

            </>}

            {time && <>


                <Background bgImage='background2'>

                    <div className={style.container}>

                        <Duvidas />

                    </div>

                </Background>
            </>}


        </div >
    )

}