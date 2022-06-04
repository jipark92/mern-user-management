import { Link , useNavigate} from 'react-router-dom'
import Axios from 'axios'
import {useState} from 'react'

export default function AddUser() {

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
                {/* <footer>
                
                </footer> */}
                <svg className='blah' classxmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fillOpacity="1" d="M0,256L48,218.7C96,181,192,107,288,96C384,85,480,139,576,154.7C672,171,768,149,864,165.3C960,181,1056,235,1152,229.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
    )
}