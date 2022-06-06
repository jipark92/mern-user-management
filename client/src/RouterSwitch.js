import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import AddUser from './components/AddUser'
import Users from './components/Users'
import SearchUser from './components/SearchUser'


export default function RouterSwitch() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Users/>}/>
                <Route path="/newuser" element={<AddUser/>}/>
                <Route path='/searchuser' element={<SearchUser/>}/>
            </Routes>
        </BrowserRouter>
    )
}