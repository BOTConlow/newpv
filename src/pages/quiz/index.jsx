import React from 'react'
import style from '../../styles/app.module.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Question } from './components/question'

export function QuizPage() {

    return (

        <div>

            <Header />

            <div className={style.container}>
                <Question />
            </div>

            <div className={style.container} >
                <Footer />
            </div>

        </div>

    )
}