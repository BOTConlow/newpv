import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { HomePage } from './pages/home'
import { QuizPage } from './pages/quiz'
import ScrollToTop from '../ScrollToTop'

export function AppRoutes() {

    return (

        <Router>
            <ScrollToTop />
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path='/pesquisa' element={<QuizPage />}/>
            </Routes>
        </Router>

    )

}