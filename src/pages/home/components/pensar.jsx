import style from '../styles/pensar.module.css'
import Image from '../../../assets/bored.webp'

export function Pensar() {
    return (
        <div className={style.struture}>

            <div className={style.content}>

                <div>
                    <img
                        src={Image}
                    />
                </div>

                <div>
                    <h1>
                        Você já parou para pensar no quanto as <span style={{ color: 'var(--red-400)' }}>espinhas</span> estão <span style={{ color: 'var(--red-400)' }}>afetando</span> sua vida?
                    </h1>
                    <p>
                        Está cansado de se sentir <b>envergonhado</b> e <b>constrangido</b> devido às suas espinhas? Elas não só afetam a aparência da sua pele, mas também podem afetar sua <b>autoestima e confiança</b>.<br />
                    </p>
                    <p>
                        Mas, e se eu lhe dissesse que <b>existe uma solução</b> para acabar com as espinhas de uma vez por todas?
                    </p>
                    <p>
                        <b>Com o Protocolo Pele Perfeita</b> você poderá desfrutar de uma pele clara e saudável <b>sem se preocupar com espinhas novamente</b>.
                    </p>
                </div>

            </div >
        </div>
    )

}