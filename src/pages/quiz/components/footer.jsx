import style from '../styles/footer.module.css'

export function Footer() {
    return (

        <div className={style.content}>

            <div className={style.politica}>
                <a target="_blank"
                    style={{ color: '#cdcdcd' }}
                    href='https://plr.encompassworkshop.com.br/politicas-de-privacidade/'>
                    Políticas de Privacidade
                </a>
                <p style={{ color: '#cdcdcd', margin: '0 .5rem' }}>
                    |
                </p>
                <a target="_blank"
                    style={{ color: '#cdcdcd' }}
                    href='https://plr.encompassworkshop.com.br/politicas-de-privacidade/'>
                    Termos de Uso
                </a>
            </div>

            <p className={style.copyright}>
                © Copyright 2023 – Todos os direitos reservados.
            </p>

            <p className={style.desc}>
                Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
            </p>


        </div>
    )
}