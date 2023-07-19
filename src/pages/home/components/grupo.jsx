import style from '../styles/grupo.module.css'
import Image from '../../../assets/grupovip.webp'
import { ChatsCircle, Star } from 'phosphor-react'
import { Button2 } from '../../../components/button'

const texts = [{
    icon: 'icone1',
    title: 'Sua ajuda diária',
    desc: 'Você não vai estar sozinho(a). Tire todas as dúvidas sobre o conteúdo do e-book que podem surgir durante a sua jornada e interaja com as outras participantes. #TodosJuntos'
}, {
    icon: 'icone2',
    title: 'Inspire outras pessoas',
    desc: 'Você pode postar seus resultados, pratos e como está se sentindo. Faça parte da nossa comunidade com mais de 8 mil pessoas com o mesmo objetivo que você: Alcançar a pele ideal dos nossos sonhos.'
}]

export function Grupo() {
    return (
        <div>

            <div className={style.content}>

                <div className={style.struture}>

                    <div className={style.headline}>
                        <h1>
                            Interação E Motivação No Grupo VIP
                        </h1>
                    </div>

                    <div>
                        {texts.map((item, index) => (
                            <div key={item.title} className={style.text}>
                                <div>
                                    {
                                        item.icon == 'icone1' ?
                                            <Star size={70} weight='fill' />
                                            : item.icon == 'icone2' ?
                                                <ChatsCircle size={70} weight='fill' />
                                                :
                                                ''
                                    }
                                </div>
                                <div>
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className={style.image}>
                    <img
                        src={Image}
                    />
                </div>

            </div>


            <div className={style.subtitle}>
                <h1 style={{ textAlign: 'center' }}>
                    Agora é com você! Clique no botão abaixo e tenha agora sua autoestima de volta.
                </h1>

                <Button2
                    title='Tenha sua autoestima de volta!'
                />
            </div>

        </div>
    )
}