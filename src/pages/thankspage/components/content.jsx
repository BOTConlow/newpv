import style from '../styles/content.module.css'
import Thanks from '../../../assets/thanks.png'

export function Content() {

    return (
        <div className={style.content}>
            <div>
                <img
                    src={Thanks}
                />
            </div>
            <div className={style.textContent}>
                <div className={style.title}>
                    <h1>Parabéns Pela Compra Deste Produto!</h1>
                </div>
                <p>
                    O seu produto foi enviado e deve chegar em seu e-mail em poucos minutos!
                </p>
                <p>
                    Lembre-se: Se você está procurando resultado, terá que seguir o passo a passo deste produto.
                </  p>
                <p>
                    Aproveitem esta oportunidade! E memorize uma coisa: Tudo depende de você! A culpa sempre será sua por estar onde você está.
                </p>
                <p>
                    Boa sorte, Encompassworkshop
                </p>
            </div>
        </div>
    )
}