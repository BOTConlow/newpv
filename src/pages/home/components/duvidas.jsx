import { CaretDown, CaretLeft } from 'phosphor-react'
import { useState } from 'react'
import style from '../styles/duvidas.module.css'

export function Duvidas() {
    return (

        <div className={style.content}>

            <div className={style.headline}>
                <h1>
                    PERGUNTAS <span style={{ color: 'var(--red-400)' }}>FREQUENTES</span>
                </h1>
            </div>

            <Faqbox title='Em quanto tempo terei resultados com o Protocolo Pele Perfeita?' desc='Aplicando tudo que você vai aprender diariamente e direitinho, você conseguirá ver resultados mínimos em até 10 dias, mas os resultados completos são a partir dos 25 dias de tratamento.' />
            <Faqbox title='Vou precisar comprar algo a mais para participar do desafio?' desc='Não. Tudo que você vai precisar você já tem em casa ou no máximo na feira do seu bairro ou no supermercado que você faz suas compras.' />
            <Faqbox title='Será que o conteúdo não é técnico demais?' desc='Não. Dentro do desafio tudo é explicado de forma muito simples sem explicação complicada de médico.' />
            <Faqbox title='Há alguma contraindicação?' desc='Não há contraindicações, é para qualquer pessoa, independentemente da idade, sexo ou se tem algum problema de saúde. ' />
            <Faqbox title='Tem alguma garantia?' desc='Sim! Você terá 7 dias de garantia após o recebimento do seu acesso. Caso você não se adapte, você poderá pedir o reembolso total.' />
            <Faqbox title='Como receberei acesso ao Protocolo Pele Perfeita?' desc='Após o pagamento, você receberá instantaneamente em seu e-mail as informações e dados de acesso a nossa Área de Membros na Kiwify, onde você encontrará todos os produtos disponíveis.' />
            <Faqbox title='Quais são as formas de pagamento?' desc='São 3 formas que você pode escolher: Cartão de crédito (parcelamos em até 12x), Boleto ou Pix. Pagando no Cartão de Crédito ou no Pix, o acesso ao Protocolo Zero Acne é liberado instantaneamente. ' />



        </div>
    )
}

export function Faqbox({ title, desc }) {

    const [openDesc, setOpenDesc] = useState(false)

    const handleOpenDesc = () => setOpenDesc(!openDesc)

    return (

        <div className={style.faqbox}>

            <div onClick={handleOpenDesc} className={style.title}>

                <h1 style={{color: '#fff'}}>{title}</h1>
                <button>
                    {openDesc ? <CaretDown size={25} /> : <CaretLeft size={25} />}
                </button>

            </div>

            {
                openDesc &&
                <div className={style.desc}>

                    <p>{desc}</p>

                </div> 
            }


        </div>

    )

}