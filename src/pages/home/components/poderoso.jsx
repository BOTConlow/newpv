import style from '../styles/poderoso.module.css'
import Image from '../../../assets/doutora.webp'
import { Heartbeat, Leaf, MinusCircle } from 'phosphor-react'
import { Button } from '../../../components/button'

const acao = [{
    icon: 'icone1',
    desc: 'Antiinflamatória',
}, {
    icon: 'icone2',
    desc: 'Bactericida',
}, {
    icon: 'icone3',
    desc: 'Controladora de Oleosidade',
}]

export function Poderoso() {
    return (
        <div className={style.content}>
            <div className={style.struture}>
                <div>
                    <h1>
                        Por que o <span style={{ color: 'var(--red-400)' }}>Protocolo Pele Perfeita</span> é tão poderoso?
                    </h1>

                    <p>
                        Muitos produtos no mercado prometem acabar com as espinhas. <b>Mas a verdade</b> é que muitos desses produtos contêm ingredientes sintéticos e irritantes que podem até <b>piorar a condição da pele ao invés de melhorá-la</b>. Eles tratam apenas os sintomas, não a <b>causa subjacente da acne</b>. Então, por que continuar gastando dinheiro em produtos <b>caros e ineficazes?</b>
                    </p>
                    <p>
                        Nosso Protocolo exclusivo oferece uma <b>solução totalmente diferente</b>. Com ele você restaura a sua pele de forma <b>natural e permanente</b>, agindo diretamente na <b>causa da acne!</b>
                    </p>
                </div>

                <img
                    src={Image}
                />
            </div>

            <div>

                <p className={style.subtitle}>
                    <b>Nossos Ingredientes</b> Possuem ação:
                </p>

                <div className={style.acao}>
                    {acao.map((item, index) => {
                        return (
                            <div key={item.desc} >
                                {
                                    index <= 2 ?
                                        <div className={style.icon} >
                                            <div
                                                style={{
                                                    color: 'var(--red-300)',
                                                }}
                                            >
                                                {
                                                    item.icon == 'icone1' ?
                                                        <Heartbeat size={50} />
                                                        : item.icon == 'icone2' ?
                                                            <Leaf size={50} />
                                                            : item.icon == 'icone3' ?
                                                                <MinusCircle size={50} />
                                                                :
                                                                ''
                                                }
                                            </div>
                                            <div className={style.icontext}>
                                                <p>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                        :
                                        ''
                                }
                            </div>
                        )
                    })}
                </div>

            </div>

            <div className={style.provocam}>
                <p>
                    Vamos te ensinar como produzir os <span style={{ color: 'var(--red-500)' }}>peptídeos anti-acnes 100% naturais</span> em <span style={{ color: 'var(--red-500)' }}>sua própria casa</span>, utilizando fontes <span style={{ color: 'var(--red-500)' }}>naturais</span>, <span style={{ color: 'var(--red-500)' }}>seguras</span> e eficazes.
                </p>
                <p>
                    Com essas informações valiosas, você pode tratar a <span style={{ color: 'var(--red-500)' }}>causa subjacente</span> da acne e obter resultados reais e  mais duradouros!
                </p>
                <p>
                    <b>Sem precisar gastar mais dinheiro em produtos que não funcionam.</b>
                </p>

                <Button
                    title='Quero obter acesso ao protocolo!'
                    desc='Por apenas 12X de R$ 15,05 ou R$ 149,90 à vista.'
                />
            </div>

        </div >

    )
}