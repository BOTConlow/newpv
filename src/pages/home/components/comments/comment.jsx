import { forwardRef, useState } from 'react'
import style from '../../styles/comments/comment.module.css'
import { SetFeedback } from './setfeedback'


function Comment(props, ref) {

    const { handleAddNewFeedback } = props

    const { comment, handleChangeComment } = props

    
    
    return (

        <div>

            <div className={style.comment}>

                <h1>Escreva um comentário</h1>
                
                <textarea
                    value={comment}
                    onChange={handleChangeComment}
                    placeholder="Deixe seu comentario..."
                />

                <button
                    disabled={!comment}
                    className={style.publishButton}
                    onClick={() => {
                        handleAddNewFeedback(comment)
                        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' })
                    }}
                >
                    Publicar
                </button>

            </div>

        </div>

    )
}

export default forwardRef(Comment)