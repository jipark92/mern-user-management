import {useState, useEffect} from 'react'
import Axios from 'axios'

export default function UpdateForm(props) {

    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newGender, setNewGender] = useState('')
    const [newStatus, setNewStatus] = useState('')

    const updateBtn = (id) => {
        console.log('clicked update')
        if(!newName || !newEmail || !newAge || !newPhone) return
        Axios.put(`http://localhost:3001/updateuser`,{
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
        <div className="update-form-container">
            <h2 className="update-form-title">Update Form</h2>
                <form className="update-form">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name'  onChange={(e)=>{setNewName(e.target.value)
                        console.log(newName)
                        }} defaultValue={props.rowDatas.name} required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email' defaultValue={props.rowDatas.email} onChange={(e)=>{
                            console.log(newEmail)
                            setNewEmail(e.target.value)}} required/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type='number' name='age' id='age' onChange={(e)=>{
                            console.log(newAge)
                            setNewAge(e.target.value)}} defaultValue={props.rowDatas.age} maxLength="3" required/>
                        <label htmlFor="phone">Phone</label>
                        <input type='number' name='phone' id='phone' onChange={(e)=>{
                            console.log(newPhone)
                            setNewPhone(e.target.value)}} defaultValue={props.rowDatas.phone} maxLength="10" required/>
                    </div>
                    <div>
                    <label htmlFor="gender">Gender</label>
                        <select name='gender' id='gender' onChange={(e)=>{
                            console.log(newGender)
                            setNewGender(e.target.value)}} defaultValue={props.rowDatas.gender} required>
                            <option value="Male" >Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <label htmlFor="status">Status</label>
                        <select name='status' id='status'  onChange={(e)=>{
                            console.log(newStatus)
                            setNewStatus(e.target.value)}} defaultValue={props.rowDatas.status}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <button className="update-btn" onClick={(e)=>{
                        e.preventDefault()
                        updateBtn(props.rowDatas._id)
                        // console.log(props.rowDatas._id)
                        props.handleClose()
                        }}>Update User</button>
                    <button className='close-btn' onClick={(e)=>{
                        e.preventDefault()
                        props.handleClose()
                    }}>Close</button>
                </form>
        </div>
    )
}