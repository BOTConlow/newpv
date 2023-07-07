import { Button2 } from '../../../components/button'
import style from '../styles/promocao.module.css'

export function Promocao() {

    return (
        <div>

            <div className={style.promocao}>
                <div>
                    <p>
                        FAÇA SUA INSCRIÇÃO E COMECE HOJE MESMO
                    </p>
                    <h1>
                        De R$ 397,00
                    </h1>
                    <p>
                        <span style={{ color: '#000000' }}>Por 12x de 15,05</span> ou R$ 149,90 à vista
                    </p>
                    <h2>
                        <u>Promoção expira hoje!</u>
                    </h2>

                    <Button2
                        title='Clique aqui para se livrar das acnes!'
                    />
                </div>
            </div>
            <div className={style.subtitle}>
                <p>
                    Último dia com <span style={{ color: 'var(--red-400)' }}>60% de Desconto</span> com 4 Novos Bônus adicionados agora em Julho de 2023
                </p>
            </div>

        </div>

    )
}