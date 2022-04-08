import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../Footer/Footer'

const PageLayout = () => {
    return (
        <>
            <Header />
            <div className={'main'}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default PageLayout

