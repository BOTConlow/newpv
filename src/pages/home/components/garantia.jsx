import style from '../styles/garantia.module.css'
import Selo from '../../../assets/selo.png'
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
                        30 Dias de Garantia <span style={{ color: 'var(--red-500)' }}>Incondicional!</span>
                    </h1>
                    <p>
                        Aproveite o acesso exclusivo ao tratamento completo por 30 dias sem pressão. Você terá tempo para avaliar e testar todos os benefícios que ele pode proporcionar. Além disso, nosso suporte 24 horas estará à disposição para tirar todas as suas dúvidas.
                    </p>
                    <p>
                        Somos tão confiantes de que nosso produto irá superar suas expectativas, que se por algum motivo durante esse período você não se sinta satisfeito(a) ou pronto(a) para o tratamento, ou até mesmo se as cores presentes em nosso material não o(a) agradaram, não há problema algum!
                    </p>
                    <p>
                        Basta mandar uma mensagem para nosso suporte 24 horas que ficaremos felizes em reembolsa-lo(a) com o valor de uma consulta a um dermatologista de sua escolha como um pedido de desculpas sincero.
                    </p>
                    <p>
                        Isso mesmo, você receberá mais do que pagou instantaneamente e sem perguntas!
                    </p>
                    <Button
                        title='Clique aqui para ter uma pele limpa!'
                    />
                </div>

            </div>
        </div>
    )
}
