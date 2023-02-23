import style from '../styles/headline.module.css'
import { Button } from '../../../components/button'
import { Vsl } from './vsl'

export function Headline() {
    return (
        <div className={style.content}>

            <div className={style.headline}>
                <h1>POUCAS PESSOAS SABEM DISSO</h1>
                <h2><u>Basta fazer isso</u> para produzir <span style={{ color: 'var(--red-400)' }}>peptídeos anti-acnes</span> capazes de <span style={{ color: 'var(--red-400)' }}>eliminar <u>definitivamente</u></span> suas espinhas</h2>
            </div>

            <div>
                <Vsl />
            </div>

            <Button
                title='Clique aqui se deseja acabar com as acnes!'
            />

        </div>
    )
}
