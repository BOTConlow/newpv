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
                    Veja o que est??o falando <span style={{ color: 'var(--red-400)' }}>AGORA do nosso protocolo</span>
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
                            desc={'Eu usei roacutan como ??ltima alternativa depois de 4 anos sofrendo com acne severa. r??medio super pesado q amenizou as acnes mas me criou muitos problemas, ele tem muitos efeitos colaterais. Por??m ap??s minha gesta????o voltei a ter acne, mas em 4 semanas usando esse m??todo voltei a ter o rosto limpo novamente. MUITO OBRIGADA DRA!'}
                            time={formatDistanceToNow(date4, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    {time3 &&
                        <DepoimentoBoxFinal
                            src={Perfil31}
                            title={'Angela Paix??o'}
                            desc={'Enviar esse v??deo e marcar os m??dicos da minha cidade pra ver se aprendem alguma coisa, pois eles s?? sabem passar ??cidose mais ??cidos e n??o resolvem o problema e ficamos ref??m de medica????es e dermocosmeticos, parab??ns doutora excelente m??todo, com certeza ajudou muito a todos n??s ????????'}
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
                            desc={'eu assisti esse v??deo meses atr??s e t?? voltando aqui agora pra agradecer, minha pele sempre foi horr??vel minhas bochechas sempre foram cheias de espinhas inflamadas, se n??o fosse por voc?? eu ainda estaria estaria assim, sou MUITO grata porque agora finalmente eu consigo me olhar no espelho e me achar bonita, s?? n??s mulheres entendemos como isso nos afeta'}
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
                            desc={'Depois desse v??deo minha vida mudou do dia pra noite!! Obrigada pelo protocolo Karina... Deus te aben??oe'}
                            time={formatDistanceToNow(date1, {
                                locale: ptBR,
                            })}
                            ammount={0}
                        />
                    }

                    <DepoimentoBoxFinal
                        src={Perfil3}
                        title={'Rafaela Borges'}
                        desc={'Eu j?? ia fechar a p??gina, ainda bem que assisti at?? o final! Obrigada pelo protocolo Karina'}
                        time={'1 hora'}
                        ammount={49}
                        haveAnswer

                    >
                        <div className={style.answer}>
                            <FeedbackStruture
                                src={Perfil8}
                                title={'Bainca Correia'}
                                desc={'kkkkkkk eu tamb??m estava quase fechando, ufaa'}
                                time={'1 hora'}
                                ammount={29}
                            />
                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil5}
                        title={'Brenda Marques'}
                        desc={`Algu??m a?? de ${location.city == 'undefined' ? 'S??o Paulo' : location.city} que j?? testou pode me dizer se funciona?`}
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
                                    desc={'Obgdaa!! Vou testar ent??o'}
                                    time={'1 hora'}
                                    ammount={32}
                                />
                            </div>

                        </div>

                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil10}
                        title={'Marcelo Rodrigues'}
                        desc={'Melhor escolha da minha vida, meu rosto est?? ficando lisinho, to amando o resultado, j?? senti diferen??a na primeira semana, incr??vel!!'}
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
                        desc={'Recomendo, duas semanas de uso e j?? diminuiu uns 30%!!!'}
                        time={'7 horas'}
                        ammount={76}
                        haveAnswer
                    >

                        <div>

                            <div className={style.answer}>
                                <FeedbackStruture
                                    src={Perfil6}
                                    title={'Julia Campos'}
                                    desc={'S??rio???'}
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
                                    desc={'manoooo, vou usar ent??o, n??o aguento mais sofrer com isso, todo dia amanhe??o com uma espinha nova'}
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
                        desc={'Meninaaas que protocolo ?? esse, minha pele ?? completamente outra kkk. S?? a gente sabe como isso afeta nossa autoestima'}
                        time={'8 horas'}
                        ammount={126}
                    />

                    <DepoimentoBoxFinal
                        src={Perfil16}
                        title={'Cristiane Vargas'}
                        desc={'Eu sou de Manaus e funcionou muito bem nessa regi??o ??mida, tanto eu como minha cunhada tinhamos acne no rosto, nos ombros e nas costas, seguimos o passo a passo do protocolo e tivemos resultados bem r??pido, e olha que antes disso eu e ela j?? tinhamos gastado muito dinheiro e nada funcionava!!'}
                        time={'10 horas'}
                        ammount={62}
                        haveAnswer

                    >
                        <div className={style.answer}>
                            <FeedbackStruture
                                src={Perfil25}
                                title={'Rafael Machado'}
                                desc={`Mesmo aqui em ${location.city} o m??todo funciona, faz 2 meses q testei o m??todo e minha pele nunca foi t??o limpa`}
                                time={'8 horas'}
                                ammount={72}
                            />
                        </div>
                        <div className={style.secondanswer}>
                            <FeedbackStruture
                                src={Perfil17}
                                title={'Miriam Costa'}
                                desc={'Aqui em Bras??lia tb funcionou muito bem, apesar da secura da regi??o. Estou a um m??s usando o protocolo. S?? gratid??o'}
                                time={'4 horas'}
                                ammount={23}
                            />
                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil26}
                        title={'Lucas Murilo'}
                        desc={'Coitado de quem ainda n??o descobriu esse m??todo kakakaka vai sofrer o resto da vida '}
                        time={'11 horas'}
                        ammount={88}
                    />

                    <DepoimentoBoxFinal
                        src={Perfil1}
                        title={'Luciana Oliveira'}
                        desc={'Estou sofrendo com acne na fase adulta. Tenho 29 anos. e fui diagnosticada em 2021 com ov??rio policistico. De um tempo pra c?? as espinhas est??o sempre inflamadas, a minha pele n??o descansa mais. Ja tratei com antibi??ticos, sabonetes, anticoncepcionais e at?? "pilling" (concomitantemente). Continuei com espinhas, mas s?? com 10 dias aplicando esse protocolo j?? percebi uma melhroa significativa'}
                        time={'13 horas'}
                        ammount={102}
                        haveAnswer

                    >
                        <div className={style.answer}>
                            <FeedbackStruture
                                src={Perfil21}
                                title={'Giovana Ferri'}
                                desc={'Meu maior arrependimento na vida inteira foi tomar o anticoncepcional precocemente, eu tinha 12 anos e por problemas tive que come??ar a tomar, eu n??o sabia dos problemas que poderiam me causar futuramente, e hoje vejo o quanto sofria com isso, n??o s?? com a acne, como tamb??m o inicio de trombose. Esse m??todo foi revolucionario na minha vida. ESTOU ETERNAMENTE GRATA'}
                                time={'6 horas'}
                                ammount={46}
                            />
                        </div>
                    </DepoimentoBoxFinal>

                    <DepoimentoBoxFinal
                        src={Perfil23}
                        title={'Sara Moscato'}
                        desc={'De cara n??o ia testar esse protocolo, ainda bem que decidi dar essa chance, pois j?? tinha tentado de tudo e nada funcionava, achei que esse fosse mais um daqueles produtos que prometem ser milagrosos mas n??o funcionam'}
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
                                desc={'Sim, pode confiar! J?? tive um bom resultado em poucas semanas.'}
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