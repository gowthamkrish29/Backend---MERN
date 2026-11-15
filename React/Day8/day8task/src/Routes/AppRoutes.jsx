import { Route, Routes } from 'react-router-dom'
import Array from '../pages/Array'
import NavBar from '../components/NavBar'
import ObjectProcess from '../pages/ObjectProcess'
import Practice from '../pages/Practice'

const AppRoutes = () => {
    return (



        <>

            <NavBar />

            <Routes>

                <Route path="/" element={<Array />} />
                <Route path="/obj" element={<ObjectProcess />} />
                <Route path="/practice" element={<Practice/>} />

            </Routes>

        </>
    )
}

export default AppRoutes