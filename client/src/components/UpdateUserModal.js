import Axios from 'axios'
import {useState} from 'react'

export default function UpdateModal(props) {

    const [newName, setNewName] = useState(props.rowDatas.name)
    const [newEmail, setNewEmail] = useState(props.rowDatas.email)
    const [newAge, setNewAge] = useState(props.rowDatas.age)
    const [newPhone, setNewPhone] = useState(props.rowDatas.phone)
    const [newGender, setNewGender] = useState(props.rowDatas.gender)
    const [newStatus, setNewStatus] = useState(props.rowDatas.status)
    const [newDate, setNewDate] = useState(props.rowDatas.date)

    const updateBtn = (id) => {
        console.log('clicked update')
        Axios.put('http://localhost:3001/updateuser',{
            id: id,
            newName: newName,
            newEmail: newEmail,
            newAge: newAge,
            newPhone: newPhone,
            newGender: newGender,
            newStatus: newStatus,
            newDate: newDate
        })
    }
    
    return (
        <div className="update-modal-container" >
            <h3>Update Form</h3>
            <p className='text-light' style={{textAlign:"center"}}>For User with ID: <u>{props.rowDatas._id}</u></p>
            <label>Name</label>
            <input type="text" defaultValue={props.rowDatas.name} onChange={(e)=>{
                setNewName(e.target.value)
                }}/>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' defaultValue={newEmail} onChange={(e)=>{setNewEmail(e.target.value)}} required/>
            
            <label htmlFor="age">Age</label>
            <input type='number' name='age' id='age' defaultValue={props.rowDatas.age} onChange={(e)=>{
                if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength)
                setNewAge(e.target.value)
                }}  maxLength="3"  required/>
            
            <label htmlFor="phone">Phone</label>
            <input type='number' name='phone' id='phone' defaultValue={props.rowDatas.phone} onChange={(e)=>{
                if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength)
                setNewPhone(e.target.value)}} maxLength="10" required/>
        
            <label htmlFor="gender">Gender</label>
            <select name='gender' id='gender' defaultValue={props.rowDatas.gender} onChange={(e)=>{setNewGender(e.target.value)}}  required>
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
            </select>
            
            <label htmlFor="status">Status</label>
            <select name='status' id='status'  defaultValue={props.rowDatas.status} onChange={(e)=>{setNewStatus(e.target.value)}} >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>

            <label htmlFor='date'>Date</label>
            <input type='date' name='date' id='date' onChange={(e)=>setNewDate(e.target.value)}/>
            <button className='submit-update-btn' onClick={(e)=>{
                e.preventDefault()
                updateBtn(props.rowDatas._id)
                props.handleClose()
            }}>Submit Update</button>
            <button className='close-update-btn' onClick={(e)=>{
                e.preventDefault()
                props.handleClose()
            }}>CLOSE</button>
        </div>
    )
}