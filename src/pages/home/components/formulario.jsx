import { useState } from 'react';
import style from '../styles/formulario.module.css'
import axios from 'axios';

export function Formulario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [mensagemType, setMensagemType] = useState('');
    const [exibirFormulario, setExibirFormulario] = useState(true);

    // Função para validar o formato do email
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const enviarEmail = () => {
        // Verificar se o email é válido
        if (!isEmailValid(email)) {
            setErroEmail('Por favor, digite um email válido.');
            setEnviado(false);
            setTimeout(() => {
                setErroEmail('');
            }, 3000); // Remover mensagem após 2 segundos
            return;
        }

        axios
            .post('https://www.protocolopeleperfeita.com.br:5000/enviar-email', { nome, email })
            .then((response) => {
                console.log(response.data);
                setNome('');
                setEmail('');
                setEnviado(true);
                setMensagem('E-mail enviado com sucesso!');
                setMensagemType('success'); // Adicionar um estado para o tipo de mensagem (success ou error)

                setTimeout(() => {
                    setEnviado(false);
                    setMensagem('');
                    setMensagemType(''); // Limpar o estado do tipo de mensagem após 3 segundos
                }, 3000);
            })
            .catch((error) => {
                console.error(error);
                setEnviado(true);
                if (error.response && error.response.status === 400) {
                    // Verifica se a resposta contém o status 400 (Bad Request)
                    setMensagem('E-mail já cadastrado.');
                    setMensagemType('error'); // Definir o tipo de mensagem como erro
                } else {
                    setMensagem('Erro ao enviar o e-mail.');
                    setMensagemType('error'); // Definir o tipo de mensagem como erro
                }
                setTimeout(() => {
                    setEnviado(false);
                    setMensagem('');
                    setMensagemType(''); // Limpar o estado do tipo de mensagem após 3 segundos
                }, 3000);
            });
    };

    const fecharFormulario = () => {
        setExibirFormulario(false);
    };

    return (
        <>
            {exibirFormulario && ( // Renderizar o formulário somente se o estado exibirFormulario for verdadeiro
                <div className={style.container}>
                    <div className={style.Moldura} />

                    <div className={style.content}>
                        <div>
                            <h1>Formulário de Desconto</h1>
                            <p>Preencha o formulário e receba em seu e-mail um cupom de 35% de desconto!</p>
                        </div>
                        <div className={style['form-group']}>
                            <label className={style.label}>Nome Completo:</label>
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className={style.input} />
                        </div>
                        <div className={style['form-group']}>
                            <label className={style.label}>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={style.input}
                            />
                            {erroEmail && <div className={style['error-message']}>{erroEmail}</div>}
                            {enviado && <div className={style[`${mensagemType}-message`]}>{mensagem}</div>}
                        </div>
                        <button onClick={enviarEmail} disabled={!nome || !email}>Enviar</button>
                        <button onClick={fecharFormulario} className={style['close-button']}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}