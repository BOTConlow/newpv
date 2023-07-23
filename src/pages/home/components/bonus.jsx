import style from '../styles/bonus.module.css'
import Image from '../../../assets/detox.webp'
import Image2 from '../../../assets/mascaras.webp'
import Image3 from '../../../assets/guia.webp'
import Image4 from '../../../assets/vip.webp'
import { Button } from '../../../components/button'

const texts1 = [{
    image: Image,
    title: 'Detox Zero Acne',
    desk: 'Transforme sua pele com os poderes desintoxicantes dos nossos sucos detox para acne. Com ingredientes naturais perfeitos para retirar as toxinas causadoras da acne no seu organismo.',
}, {
    image: Image2,
    title: '6 Máscaras Naturais Anti-Acne',
    desk: 'Aprenda a receita de 6 máscaras naturais para tratar da inflamação da sua pele rapidamente. Cada máscara só precisa de 2 ingredientes que você tem em casa',
}]

const texts2 = [{

    image: Image3,
    title: 'Guia Pele Saudável',
    desk: 'Descubra os pequenos ajustes secretos que devem ser feitos no dia a dia para ter uma alimentação anti-acne em seu dia a dia, sem precisar abrir mão dos alimentos que você ama. Além de descobrir quais alimentos que podem agravar a acne e quais são bons para a sua pele.',
}, {
    image: Image4,
    title: 'Suporte E Motivação No Grupo Vip',
    desk: 'Toda a ajuda e motivação que você precisa para se manter focada no seu objetivo.',
}]

export function Bonus() {
    return (

        <div className={style.content}>

            <div className={style.headline}>
                <h1>
                    <u>E não para por ai</u>
                </h1>
                <p>
                    Além de todo esse conteúdo exclusivo ainda vamos disponibilizar para você nossos <span style={{ color: 'var(--red-400)' }}>top 4 materiais pagos de graça!</span>
                </p>
            </div>

            <div className={style.struture}>

                <div>
                    {texts1.map((item, index) => (
                        <div key={item.desk} className={style.bonus}>
                            <div>
                                <img 
                                src={item.image}
                                />
                            </div>
                            <div className={style.text}>
                                <h1>{item.title}</h1>
                                <p>{item.desk}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    {texts2.map((item, index) => (
                        <div key={item.desk} className={style.bonus}>
                            <div>
                                <img
                                    className={style.image}
                                    src={item.image}
                                />
                            </div>
                            <div className={style.text}>
                                <h1>{item.title}</h1>
                                <p>{item.desk}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <Button
                title='Quero ter acesso a todo esse material!'
            />

        </div>
    )
}