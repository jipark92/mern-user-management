import Axios from 'axios'
import {useState, useEffect} from 'react'

export default function UpdateModal(props) {

    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newGender, setNewGender] = useState('')
    const [newStatus, setNewStatus] = useState('')


    const updateBtn = (id) => {
        console.log('clicked update')
        Axios.put('http://localhost:3001/updateuser',{
            id: id,
            newName: newName,
            newEmail: newEmail,
            newAge: newAge,
            newPhone: newPhone,
            newGender: newGender,
            newStatus: newStatus
        })
    }

    return (
        <div className="update-modal-container">
            <h3>Update Form</h3>
            <p className='text-light' style={{textAlign:"center"}}>For User with ID:{props.rowDatas._id}</p>
            <label>Name</label>
            <input type="text" defaultValue={props.rowDatas.name} onChange={(e)=>{
                setNewName(e.target.value)
                }}/>


            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' defaultValue={props.rowDatas.email}  onChange={(e)=>{setNewEmail(e.target.value)}} required/>
            <label htmlFor="age">Age</label>
            <input type='number' name='age' id='age'  maxLength="3" defaultValue={props.rowDatas.age}  onChange={(e)=>{setNewAge(e.target.value)}}  required/>
            <label htmlFor="phone">Phone</label>
            <input type='number' name='phone' id='phone' maxLength="10"  defaultValue={props.rowDatas.phone}  onChange={(e)=>{setNewPhone(e.target.value)}} required/>


            <label htmlFor="gender">Gender</label>
            <select name='gender' id='gender' defaultValue={props.rowDatas.gender}  onChange={(e)=>{setNewGender(e.target.value)}}  required>
                <option value="Male" >Male</option>
                <option value="Female">Female</option>
            </select>
            <label htmlFor="status">Status</label>
            <select name='status' id='status'  defaultValue={props.rowDatas.status}  onChange={(e)=>{setNewStatus(e.target.value)}} >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
            </select>
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