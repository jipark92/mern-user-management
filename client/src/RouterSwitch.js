import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import NewUserPage from './components/NewUserPage'
import Users from './components/Users'

export default function RouterSwitch() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Users/>}/>
                <Route path="/newuser" element={<NewUserPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}