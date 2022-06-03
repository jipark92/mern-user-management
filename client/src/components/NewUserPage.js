import { Link , useNavigate} from 'react-router-dom'
import Axios from 'axios'
import {useState} from 'react'

export default function NewUserPage() {

    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userGender, setUserGender] = useState("Male")
    const [userStatus, setUserStatus ] = useState("Active")
    const [userAge, setUserAge] = useState()
    const [userPhone, setUserPhone] = useState()

    const addNewUser = () => {
        Axios.post(`http://localhost:3001/newuser`,{
            name: userName,
            email: userEmail,
            age: userAge,
            phone: userPhone,
            gender: userGender,
            status: userStatus
        })
    }

    return (
            <div className="new-users-form-container">
                <form className='form-container bg-dark text-light'>
                    <div>
                        <h3>Add New User Form</h3>
                        <p>User Deleted</p>
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name' onChange={(e)=>setUserName(e.target.value)} required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' onChange={(e)=>setUserEmail(e.target.value)} required/>
                        <label htmlFor="age">Age</label>
                        <input type='number' name='age' id='age' onChange={(e)=>{
                            setUserAge(e.target.value)
                            if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength)
                            }} maxLength="3" required/>
                        <label htmlFor="phone">Phone</label>
                        <input type='number' name='phone' id='phone' maxLength="10"  onChange={(e)=>{
                            setUserPhone(e.target.value)
                            if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength)
                            }} required/>
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
                    <div className='d-grid'>
                        <button className="bg-light text-dark" onClick={(e)=>{
                            if(!userName || !userEmail || !userAge || !userPhone)return
                            e.preventDefault()
                            addNewUser()
                            navigate('/')
                        }}>Add User</button>
                        <Link to='/'  className="d-grid">
                            <button className="home bg-light text-dark">Go Back</button>
                        </Link>
                    </div>
                </form>
            </div>
    )
}