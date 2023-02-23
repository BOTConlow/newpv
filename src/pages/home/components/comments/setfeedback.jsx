import style from '../../styles/comments/setfeedback.module.css'
import { Trash } from "phosphor-react";
import { FeedbackStruture } from './feedbackstruture';
import Avatar from './../../../../assets/avatar.webp'
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function SetFeedback({ feedback, removeFeedback }) {

    return (

        <div className={style.feedback}>

            <div className={style.profile}>

                <FeedbackStruture
                    src={Avatar}
                    title='Usuário Anônimo'
                    desc={feedback.feedback}
                    time={formatDistanceToNow(feedback.createdAt, {
                        locale: ptBR,
                    })}
                    ammount={0}
                />

            </div>
            
            <div className={style.removebutton}>
                <button
                    onClick={() => removeFeedback(feedback)}
                >
                    <Trash size={24} />
                </button>
            </div>


        </div>

    )
}