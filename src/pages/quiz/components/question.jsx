import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../styles/question.module.css'
import { BarLoader } from 'react-spinners'
import Image from '../../../assets/celula.gif'
import { Button } from './button'

export function Question() {

    const [page, setPage] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        if (page === 2) {

            setTimeout(() => {
                setPage(3)
            }, 3000)

        }

        return () => {
            clearTimeout(1)
        }
    }, [page])


    return (

        <div className={style.content}>

            {
                page === 0 ?
                    <>

                        <div className={style.title}>
                            <p>
                                Responda corretamente para que possamos analisar qual é o <b>método ideal <u>para você</u>.</b>
                            </p>
                        </div>

                        <div className={style.subtitle}>
                            <p style={{ fontSize: '1.8rem' }}>
                                Quantos anos você tem?
                            </p>
                        </div>

                        <div className={style.buttons}>
                            <button onClick={() => setPage(1)}>
                                14 a 18
                            </button>
                            <button onClick={() => setPage(1)}>
                                19 a 27
                            </button>
                            <button onClick={() => setPage(1)}>
                                27 ou mais
                            </button>
                        </div>
                    </>
                    : page === 1 ?
                        <>

                            <div className={style.title}>
                                <p>
                                    Responda corretamente para que possamos analisar qual é o <b>método ideal <u>para você</u>.</b>
                                </p>
                            </div>


                            <div className={style.subtitle}>
                                <p style={{ fontSize: '1.8rem' }}>
                                    Onde as Espinhas e Acnes mais incomodam?
                                </p>
                            </div>

                            <div className={style.buttons}>
                                <button onClick={() => setPage(2)}>
                                    Só no rosto
                                </button>
                                <button onClick={() => setPage(2)}>
                                    Só nas costas
                                </button>
                                <button onClick={() => setPage(2)}>
                                    Região peitoral
                                </button>
                                <button onClick={() => setPage(2)}>
                                    Vários lugares juntos
                                </button>
                            </div>
                        </>
                        : page === 2 ?
                            <>

                                <div className={style.title}>
                                    <p>
                                        Responda corretamente para que possamos analisar qual é o <b>método ideal <u>para você</u>.</b>
                                    </p>
                                </div>


                                <div className={style.subtitle}>
                                    <p style={{ fontSize: '1.8rem' }}>
                                        Analisando suas respostas
                                    </p>
                                </div>

                                <div className={style.barloader}>
                                    <BarLoader
                                        width={300}
                                        color='red'
                                    />
                                </div>
                            </>
                            : page === 3 ?
                                <>
                                    <div className={style.page3}>
                                        
                                        <img
                                            src={Image}
                                        />

                                        <div className={style.forma}>

                                            <p className={style.firstext}>
                                                <b>R:</b> A solução para seu caso com acnes é um tratamento interno, fortalecendo seu Sistema Anti-Acne natural. Resolvendo suas espinhas de dentro para fora de forma caseira.
                                            </p>

                                            <div className={style.box}>

                                                <p>
                                                    Você gostaria de descobrir uma forma de <b>Eliminar a Acne pela Raiz do Problema?</b>
                                                </p>

                                                <Button />

                                            </div>

                                            <div className={style.secondtext}>

                                                <h4>
                                                    <b>ATENÇÃO:</b>
                                                </h4>

                                                <p>
                                                    Só vá para página se você...
                                                </p>

                                                <ul>
                                                    <li>
                                                        Estiver pronta para descobrir todas as verdades e finalmente se livrar das acnes
                                                    </li>
                                                    <li>
                                                        Se você se comprometer a assistir o vídeo curto até o final
                                                    </li>
                                                </ul>

                                                <Button />
                                            </div>

                                        </div>

                                    </div>
                                </>
                                :
                                ''


            }

        </div>
    )
}