import { BugBeetle, FirstAid, Heartbeat, HighlighterCircle, Leaf, MinusCircle } from 'phosphor-react'
import style from '../styles/beneficios.module.css'
import image from '../../../assets/celular1.webp'
import { Button } from '../../../components/button'

const texts = [{
    icon: 'icone1',
    title: 'Limpar profundamente a sua pele',
}, {
    icon: 'icone2',
    title: 'Eliminar as suas acnes de forma natural',
}, {
    icon: 'icone3',
    title: 'Reduzir os seus poros',
}, {
    icon: 'icone4',
    title: 'Desintoxicar o seu organismo das bactérias da acne',
}, {
    icon: 'icone5',
    title: 'Acabar com as acnes internas',
}, {
    icon: 'icone6',
    title: 'Desinflamar as acnes avermelhadas',
}]

export function Beneficios() {
    return (
        <div className={style.content}>

            <div className={style.strutureheadline}>

                <div>
                    <img
                        src={image}
                    />
                </div>

                <h1>
                    O que o <span style={{ color: 'var(--red-400)' }}><b>Protocolo Pele Perfeita</b></span> pode fazer por você?
                </h1>

            </div>

            <div className={style.strutureicons}>
                <div>
                    {texts.map((item, index) => {
                        return (
                            <div key={item.title} >
                                {
                                    index <= 2 ?
                                        <div className={style.icon1} >
                                            <div>
                                                {
                                                    item.icon == 'icone1' ?
                                                    <Heartbeat size={65} weight="duotone" />
                                                        : item.icon == 'icone2' ?
                                                        <Leaf size={65} weight="duotone" />
                                                            : item.icon == 'icone3' ?
                                                                <MinusCircle size={65} weight="duotone" />
                                                                :
                                                                ''
                                                }
                                            </div>
                                            <div className={style.icontext}>
                                                <p>
                                                    {item.title}
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
                <div>
                    {texts.map((item, index) => {
                        return (
                            <div key={item.title}>
                                {
                                    index >= 3 && index <= 5 ?
                                        <div className={style.icon2} >
                                            <div>
                                                {

                                                    item.icon == 'icone4' ?
                                                        <BugBeetle size={65} weight="duotone" />
                                                        : item.icon == 'icone5' ?
                                                            <HighlighterCircle size={65} weight="duotone" />
                                                            : item.icon == 'icone6' ?
                                                                <FirstAid size={65} weight="duotone" />
                                                                :
                                                                ''
                                                }
                                            </div>
                                            <div className={style.icontext}>
                                                <p>
                                                    {item.title}
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

            <div>
                <Button
                    title='Clique aqui para se livrar das espinhas!'
                />
            </div>

        </div >

    )
}