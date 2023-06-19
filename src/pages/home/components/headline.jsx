import style from '../styles/headline.module.css'
import { Button } from '../../../components/button'
import { Vsl } from './vsl'

export function Headline() {
    return (
        <div className={style.content}>

            <div className={style.headline}>
                <h1>ASSISTA E DESCUBRA</h1>
                <h2>Como <u>Jovens e Adultos</u> Estão Conquistando Uma <span style={{ color: 'var(--red-400)' }}>Pele Lisa e Limpa</span> Em Casa <u>Sem precisar De Roacutan</u></h2>
            </div>

            <div>
                <Vsl />
            </div>

                <p>ATENÇÃO: Esse vídeo poderá sair do ar a qualquer momento</p>

            <Button
                title='Clique aqui se deseja acabar com as acnes!'
            />

        </div>
    )
}
