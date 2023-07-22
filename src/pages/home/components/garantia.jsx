import style from '../styles/garantia.module.css'
import Selo from '../../../assets/selo.webp'
import { Button } from '../../../components/button'


export function Garantia() {

    return (
        <div className={style.content}>
            <div className={style.garantia}>

                <img
                    src={Selo}
                />

                <div className={style.box}>
                    <h1>
                        7 Dias de Garantia <span style={{ color: 'var(--red-500)' }}>Incondicional!</span>
                    </h1>
                    <p>
                        Você terá acesso por 7 dias para testar todo o material. Sua oportunidade de avaliar e testar todo o tratamento, tirar dúvidas com o nosso suporte 24 horas, enfim, desfrutar de tudo que o tratamento pode te proporcionar sem qualquer pressão.
                    </p>
                    <p>
                        Confiamos tanto que nosso produto irá superar suas expectativas, que se por algum motivo durante esse período você decidir que o produto não é adequado para você, não está preparado(a) no momento, ou até mesmo se as cores presentes em nosso material não o(a) agradaram, não se preocupe!
                    </p>
                    <p>
                        Basta um único clique e você receberá o reembolso automático no valor total de sua compra. Isso mesmo, seu dinheiro de volta instantaneamente e sem perguntas!
                    </p>
                    <Button
                        title='Clique aqui para se livrar das acnes!'
                    />
                </div>

            </div>
        </div>
    )
}
