import style from '../../styles/comments/depoimentos2.module.css'
import Comment from './comment'
import { FeedbackStruture } from './feedbackstruture'
import { SetFeedback } from './setfeedback'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { CaretDown, CaretRight } from 'phosphor-react'
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Perfil3 from '../../../../assets/perfil3.webp'
import Perfil8 from '../../../../assets/perfil8.webp'
import Perfil5 from '../../../../assets/perfil5.webp'
import Perfil7 from '../../../../assets/perfil7.webp'
import Perfil10 from '../../../../assets/perfil10.webp'
import Perfil4 from '../../../../assets/perfil4.webp'
import Perfil12 from '../../../../assets/perfil12.webp'
import Perfil6 from '../../../../assets/perfil6.webp'
import Perfil15 from '../../../../assets/perfil15.webp'
import Perfil14 from '../../../../assets/perfil14.webp'
import Perfil11 from '../../../../assets/perfil11.webp'
import Perfil2 from '../../../../assets/perfil2.webp'
import Perfil16 from '../../../../assets/perfil16.webp'
import Perfil25 from '../../../../assets/perfil25.webp'
import Perfil17 from '../../../../assets/perfil17.webp'
import Perfil26 from '../../../../assets/perfil26.webp'
import Perfil1 from '../../../../assets/perfil1.webp'
import Perfil21 from '../../../../assets/perfil21.webp'
import Perfil23 from '../../../../assets/perfil23.webp'
import Perfil22 from '../../../../assets/perfil22.webp'
import Perfil27 from '../../../../assets/perfil27.webp'
import Perfil28 from '../../../../assets/perfil28.webp'
import Perfil29 from '../../../../assets/perfil29.webp'
import Perfil30 from '../../../../assets/perfil30.webp'
import Perfil31 from '../../../../assets/perfil31.webp'


export function DepoimentoBoxFinal(props) {
    const { haveAnswer } = props
    const [openDesc, setOpenDesc] = useState(false)
    const handleOpenDesc = () => setOpenDesc(!openDesc)

    return (
        <div className={style.question}>

            <div>
                <FeedbackStruture
                    src={props.src}
                    title={props.title}
                    desc={props.desc}
                    time={props.time}
                    ammount={props.ammount}
                />

                {
                    haveAnswer &&
                    <div className={style.showanswer}>
                        <button onClick={handleOpenDesc} className={style.button}>
                            {openDesc ? <p>Esconder respostas</p> : <p>Mostrar respostas</p>}
                            {openDesc ? <CaretDown size={15} /> : <CaretRight size={15} />}
                        </button>
                    </div>
                }
            </div>

            {
                openDesc && props.children
            }
        </div>

    )

}

export function Depoimentos2({ feedback }) {

    const [feedbacks, setFeedbacks] = useState([])
    const [location, setLocation] = useState({})
    const [time1, setTime1] = useState(false)
    const [time2, setTime2] = useState(false)
    const [time3, setTime3] = useState(false)
    const [time4, setTime4] = useState(false)
    const [time5, setTime5] = useState(false)
    const [comment, setComment] = useState('')
    const [date1, setDate1] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
    const [date3, setDate3] = useState(new Date())
    const [date4, setDate4] = useState(new Date())
    const [date5, setDate5] = useState(new Date())

    const myCommentRef = useRef(null)

    const handleAddNewFeedback = (feedback) => {

        setFeedbacks([...feedbacks, {
            feedback,
            createdAt: new Date()
        }])

        setComment('')
    }

    const handleChangeComment = (event) => setComment(event.target.value)

    const handleRemoveFeedback = (feedbackToBeRemoved) => {

        let newFeedbackWithoutRemoved = feedbacks.filter((feedback) => feedback !== feedbackToBeRemoved)

        setFeedbacks(newFeedbackWithoutRemoved)
    }

    useEffect(() => {

        const fetchLocation = async () => {

            await fetch('https://ipinfo.io/json?token=57f3d1eb815176')
                .then((response) => response.json())
                .then((data) => (setLocation(data)))

        }

        fetchLocation()
    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime1(true)
            setDate1(new Date())

        }, 30000)

    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime2(true)
            setDate2(new Date())

        }, 230000)

    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime3(true)
            setDate3(new Date())

        }, 480000)

    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime4(true)
            setDate4(new Date())

        }, 630000)

    }, [])

    useEffect(() => {

        setTimeout(() => {

            setTime5(true)
            setDate5(new Date())

        }, 780000)

    }, [])


    return (
        <div>
            <div className={style.title}>
                <h1>
                    INTERAJA <span style={{ color: 'var(--red-400)' }}>AGORA EM NOSSO CHAT EM TEMPO REAL</span>
                </h1>
            </div>

            <div className={style.content}>

                <div className={style.header}>
                    <h2>
                        <u>Mais recentes</u>
                    </h2>
                    <CaretDown size={20} />
                </div>

                <div className={style.struture}>

                    {

                        feedbacks.map((feedback) => {
                            return <div key={feedback} ref={myCommentRef}><SetFeedback removeFeedback={handleRemoveFeedback} feedback={feedback} /></div>
                        })

                    }

                    {time5 &&
                        <DepoimentoBoxFinal
                            src={Perfil27}
                            title={'Debora Souzine'}
                            desc={'Estava esperando por isso a anooooos!! mt obgdaaaaaa, acho que foi o destino cair aqui, vou comprar agora!'}
                            time={formatDistanceToNow(date5, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time4 &&
                        <DepoimentoBoxFinal
                            src={Perfil28}
                            title={'Helena Costa'}
                            desc={'Eu usei roacutan como última alternativa depois de 4 anos sofrendo com acne severa. rémedio super pesado q amenizou as acnes mas me criou muitos problemas, ele tem muitos efeitos colaterais. Porém após minha gestação voltei a ter acne, mas em 4 semanas usando esse método voltei a ter o rosto limpo novamente. MUITO OBRIGADA DRA!'}
                            time={formatDistanceToNow(date4, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time3 &&
                        <DepoimentoBoxFinal
                            src={Perfil31}
                            title={'Angela Paixão'}
                            desc={'Enviar esse vídeo e marcar os médicos da minha cidade pra ver se aprendem alguma coisa, pois eles só sabem passar ácidose mais ácidos e não resolvem o problema e ficamos refém de medicações e dermocosmeticos, parabéns doutora excelente método, com certeza ajudou muito a todos nós 👏👏'}
                            time={formatDistanceToNow(date3, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time2 &&
                        <DepoimentoBoxFinal
                            src={Perfil29}
                            title={'Barbara Souza'}
                            desc={'eu assisti esse vídeo meses atrás e tô voltando aqui agora pra agradecer, minha pele sempre foi horrível minhas bochechas sempre foram cheias de espinhas inflamadas, se não fosse por você eu ainda estaria estaria assim, sou MUITO grata porque agora finalmente eu consigo me olhar no espelho e me achar bonita, só nós mulheres entendemos como isso nos afeta'}
                            time={formatDistanceToNow(date2, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time1 &&
                        <DepoimentoBoxFinal
                            src={Perfil30}
                            title={'Bruno Angioletto'}
                            desc={'Depois desse vídeo minha vida mudou do dia pra noite!! Obrigada pelo protocolo Karina... Deus te abençoe'}
                            time={formatDistanceToNow(date1, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    <DepoimentoBoxFinal
                        src={Perfil3}
                        title={'Rafaela Borges'}
                        desc={'Eu já ia fechar a página, ainda bem que assisti até o final! Obrigada pelo protocolo Karina'}
                        time={'1 hora'}
                        ammount={49}
                        haveAnswer

                    >
                        <div className={style.answer}>
                            <FeedbackStruture
                                src={Perfil8}
                                title={'Bainca Correia'}
                                desc={'kkkkkkk eu também estava quase fechando, ufaa'}
                                time={'1 hora'}
                                ammount={29}
                            />
                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil5}
                        title={'Brenda Marques'}
                        desc={`Alguém aí de ${location.city == 'undefined' ? 'São Paulo' : location.city} que já testou pode me dizer se funciona?`}
                        time={'2 horas'}
                        ammount={67}
                        haveAnswer
                    >

                        <div>

                            <div className={style.answer}>
                                <FeedbackStruture
                                    src={Perfil7}
                                    title={'Julia Campos'}
                                    desc={`oii Brenda, siim eu sou de ${location.city} tmb. Tava desconfiada mas testei e funcionou sim!`}
                                    time={'1 hora'}
                                    ammount={49}
                                />
                            </div>
                            <div className={style.secondanswer}>
                                <FeedbackStruture
                                    src={Perfil5}
                                    title={'Brenda Marques'}
                                    desc={'Obgdaa!! Vou testar então'}
                                    time={'1 hora'}
                                    ammount={32}
                                />
                            </div>

                        </div>

                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil10}
                        title={'Marcelo Rodrigues'}
                        desc={'Melhor escolha da minha vida, meu rosto está ficando lisinho, to amando o resultado, já senti diferença na primeira semana, incrível!!'}
                        time={'3 horas'}
                        ammount={65}
                    />

                    <DepoimentoBoxFinal
                        src={Perfil4}
                        title={'Josiane Moraes'}
                        desc={'Vi muita gente comentando e compartilhando, deve funcionar'}
                        time={'5 horas'}
                        ammount={84}
                    />


                    <DepoimentoBoxFinal
                        src={Perfil12}
                        title={'Gabriel Fonseca'}
                        desc={'Recomendo, duas semanas de uso e já diminuiu uns 30%!!!'}
                        time={'7 horas'}
                        ammount={76}
                        haveAnswer
                    >

                        <div>

                            <div className={style.answer}>
                                <FeedbackStruture
                                    src={Perfil6}
                                    title={'Julia Campos'}
                                    desc={'Sério???'}
                                    time={'7 horas'}
                                    ammount={111}
                                />
                            </div>
                            <div className={style.secondanswer}>
                                <FeedbackStruture
                                    src={Perfil15}
                                    title={'Roberto N.'}
                                    desc={'Funciona mesmo??'}
                                    time={'6 horas'}
                                    ammount={56}
                                />
                            </div>
                            <div className={style.secondanswer}>
                                <FeedbackStruture
                                    src={Perfil12}
                                    title={'Gabriel Fonseca'}
                                    desc={'SIM!! podem confiar'}
                                    time={'4 horas'}
                                    ammount={46}
                                />
                            </div>
                            <div className={style.secondanswer}>
                                <FeedbackStruture
                                    src={Perfil11}
                                    title={'Marcos Guilherme'}
                                    desc={'manoooo, vou usar então, não aguento mais sofrer com isso, todo dia amanheço com uma espinha nova'}
                                    time={'3 horas'}
                                    ammount={54}
                                />
                            </div>
                            <div className={style.secondanswer}>
                                <FeedbackStruture
                                    src={Perfil12}
                                    title={'Gabriel Fonseca'}
                                    desc={'confia man, diminuiu demaaais, e ainda to na segunda semana!'}
                                    time={'1 hora'}
                                    ammount={32}
                                />
                            </div>

                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil2}
                        title={'Barbara Oliveira'}
                        desc={'Meninaaas que protocolo é esse, minha pele é completamente outra kkk. Só a gente sabe como isso afeta nossa autoestima'}
                        time={'8 horas'}
                        ammount={126}
                    />

                    <DepoimentoBoxFinal
                        src={Perfil16}
                        title={'Cristiane Vargas'}
                        desc={'Eu sou de Manaus e funcionou muito bem nessa região úmida, tanto eu como minha cunhada tinhamos acne no rosto, nos ombros e nas costas, seguimos o passo a passo do protocolo e tivemos resultados bem rápido, e olha que antes disso eu e ela já tinhamos gastado muito dinheiro e nada funcionava!!'}
                        time={'10 horas'}
                        ammount={62}
                        haveAnswer

                    >
                        <div className={style.answer}>
                            <FeedbackStruture
                                src={Perfil25}
                                title={'Rafael Machado'}
                                desc={`Mesmo aqui em ${location.city} o método funciona, faz 2 meses q testei o método e minha pele nunca foi tão limpa`}
                                time={'8 horas'}
                                ammount={72}
                            />
                        </div>
                        <div className={style.secondanswer}>
                            <FeedbackStruture
                                src={Perfil17}
                                title={'Miriam Costa'}
                                desc={'Aqui em Brasília tb funcionou muito bem, apesar da secura da região. Estou a um mês usando o protocolo. Só gratidão'}
                                time={'4 horas'}
                                ammount={23}
                            />
                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil26}
                        title={'Lucas Murilo'}
                        desc={'Coitado de quem ainda não descobriu esse método kakakaka vai sofrer o resto da vida '}
                        time={'11 horas'}
                        ammount={88}
                    />

                    <DepoimentoBoxFinal
                        src={Perfil1}
                        title={'Luciana Oliveira'}
                        desc={'Estou sofrendo com acne na fase adulta. Tenho 29 anos. e fui diagnosticada em 2021 com ovário policistico. De um tempo pra cá as espinhas estão sempre inflamadas, a minha pele não descansa mais. Ja tratei com antibióticos, sabonetes, anticoncepcionais e até "pilling" (concomitantemente). Continuei com espinhas, mas só com 10 dias aplicando esse protocolo já percebi uma melhroa significativa'}
                        time={'13 horas'}
                        ammount={102}
                        haveAnswer

                    >
                        <div className={style.answer}>
                            <FeedbackStruture
                                src={Perfil21}
                                title={'Giovana Ferri'}
                                desc={'Meu maior arrependimento na vida inteira foi tomar o anticoncepcional precocemente, eu tinha 12 anos e por problemas tive que começar a tomar, eu não sabia dos problemas que poderiam me causar futuramente, e hoje vejo o quanto sofria com isso, não só com a acne, como também o inicio de trombose. Esse método foi revolucionario na minha vida. ESTOU ETERNAMENTE GRATA'}
                                time={'6 horas'}
                                ammount={46}
                            />
                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil23}
                        title={'Sara Moscato'}
                        desc={'De cara não ia testar esse protocolo, ainda bem que decidi dar essa chance, pois já tinha tentado de tudo e nada funcionava, achei que esse fosse mais um daqueles produtos que prometem ser milagrosos mas não funcionam'}
                        time={'13 horas'}
                        ammount={154}
                        haveAnswer

                    >
                        <div className={style.answer}>
                            <FeedbackStruture
                                src={Perfil22}
                                title={'Graciele Serra'}
                                desc={'Mas funciona mesmo????'}
                                time={'9 horas'}
                                ammount={64}
                            />
                        </div>
                        <div className={style.secondanswer}>
                            <FeedbackStruture
                                src={Perfil23}
                                title={'Sara Moscato'}
                                desc={'Sim, pode confiar! Já tive um bom resultado em poucas semanas.'}
                                time={'7 horas'}
                                ammount={96}
                            />
                        </div>

                    </DepoimentoBoxFinal>

                </div>

                <div className={style.comment}>
                    <Comment
                        handleAddNewFeedback={handleAddNewFeedback}
                        comment={comment}
                        ref={myCommentRef}
                        handleChangeComment={handleChangeComment}
                    />
                </div>

            </div >

        </div>
    )
}