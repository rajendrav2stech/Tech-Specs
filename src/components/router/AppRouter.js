import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import Home from '../../components/Pages/Home/Home'
import About from '../Pages/AboutUs/About'
import Blog from '../Pages/Blog/Blog'
import NotFound from '../Pages/NotFound/NotFound'
import PageLayout from './PageLayout'

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageLayout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
