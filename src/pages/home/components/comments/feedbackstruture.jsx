import { useEffect, useState } from 'react'
import style from '../../styles/comments/feedbackstruture.module.css'
import like from './../../../../assets/like.webp'
import love from './../../../../assets/love.webp'
import React, { Component } from 'react';


export function FeedbackStruture(props) {


    const { title, desc, time, src, ammount } = props


    const [likes, setLikes] = useState(0)

    useEffect(() => {
        setLikes(ammount);
    }, []);

    const [alreadyLiked, setAlreadyLiked] = useState(false)

    const handleLike = () => {

        setLikes(alreadyLiked ? likes - 1 : likes + 1)

        setAlreadyLiked(!alreadyLiked)

    }

    return (

        <div className={style.depoimentostruture}>


            <div className={style.feedbacklike}>

                <img
                    src={src}
                />

                <button onClick={handleLike} style={{ color: alreadyLiked ? '#ec3149' : '#000' }}>
                    Curtir
                </button>

            </div>

            <div className={style.depoimentotext}>

                <div className={style.top}>
                    {
                        title && <h4>{title}</h4>
                    }

                    {
                        time && <p>{time}</p>
                    }
                </div>

                {
                    desc && <p>{desc}</p>
                }

                <div className={style.feedbacklove}>

                    <img
                        src={like}
                    />

                    <img
                        src={love}
                    />

                    <span>{likes}</span>

                </div>

            </div>

        </div>

    )
}

