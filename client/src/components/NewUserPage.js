import { Link } from 'react-router-dom'
import Axios from 'axios'
import {useState} from 'react'

export default function NewUserPage() {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userGender, setUserGender] = useState("Male")
    const [userStatus, setUserStatus ] = useState("Active")

    const addNewUser = (e) => {
        e.preventDefault()
        if(!userName || !userEmail)return
        console.log(userEmail,userGender)
        Axios.post(`http://localhost:3001/newuser`,{
            name: userName,
            email: userEmail,
            gender: userGender,
            status: userStatus
        })
    }

    return (
            <div className="new-users-form-container">
                <form className='form-container'>
                    <h3>Add New User Form</h3>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name' onChange={(e)=>setUserName(e.target.value)} required/>

                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' onChange={(e)=>setUserEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <select name='gender' id='gender' onChange={(e)=>setUserGender(e.target.value)} required>
                            <option value="Male" >Male</option>
                            <option value="Female">Female</option>
                        </select>

                        <label htmlFor="status">Status</label>
                        <select name='status' id='status' onChange={(e)=>setUserStatus(e.target.value)}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <button className="bg-dark text-light" onClick={addNewUser}>Add User</button>
                    <Link to='/'  className="d-grid">
                        <button className="home bg-dark text-light">Go Back</button>
                    </Link>
                </form>
            </div>
    )
}