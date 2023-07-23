import { CaretDoubleRight } from 'phosphor-react'
import style from '../styles/quantovale.module.css'
import { Button } from '../../../components/button'

const texts = [{
    tittle: 'Protocolo Pele Perfeita',
    price: 'R$ 197,00'
}, {
    tittle: 'Guia Pele Saudável',
    price: 'R$ 88,90'
}, {
    tittle: '6 Máscaras Naturais Anti-Acne',
    price: 'R$ 63,00'
}, {
    tittle: 'Detox Zero Acne',
    price: 'R$ 47,80'
}, {
    tittle: 'Suporte E Motivação No Grupo Vip',
}]

export function Quantovale() {
    return (
        <div className={style.border}>

            <div className={style.content}>

                <div className={style.headline}>
                    <h1>
                        Quanto Vale Ter Sua<br/> Autoestima de Volta?
                    </h1>
                </div>

                <div className={style.texts}>

                    <div className={style.title}>
                        <h1>
                            Acesso ao Protocolo + 4 super bônus por menos de uma caixa de roacutan
                        </h1>
                    </div>

                    <div>
                        {texts.map((item, index) => (
                            <div key={item.tittle} className={style.struture}>

                                <div>
                                    <CaretDoubleRight size={30} style={{color: 'var(--red-400)'}} />
                                </div>

                                <div className={style.itens}>
                                    <h1>{item.tittle}</h1>
                                    <p>{item.price}</p>
                                </div>

                            </div>
                        ))}

                    </div>

                    <div className={style.price}>
                        <p style={{ marginBottom: '.5rem' }}>
                            De <s>R$ 396,70</s>
                        </p>
                        <p style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>
                            por 12x de:
                        </p>
                        <h1>
                            R$ 15,05
                        </h1>
                        <p style={{ marginBottom: '1.5rem' }}>
                            ou 149,90 a vista
                        </p>

                        <Button
                            title='Tenha sua autoestima de volta!'
                        />

                        <p style={{marginTop: '1rem', fontSize: '1rem'}}>
                            Compra segura com garantia incondicional de 30 dias.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}