import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function Users() {

    const [userDatas, setUserDatas] = useState([])

    useEffect(()=>{
        Axios.get(`http://localhost:3001/`)
        .then(res=>{
            setUserDatas(res.data)
        })
    },[userDatas])

    const deleteBtn = (id) => {
        console.log('clicked delete')
        Axios.delete(`http://localhost:3001/deleteuser/${id}`)
    }

    const updateBtn = () => {
        console.log('clicked update')
    }

    const renderUsersDatas = userDatas.map((users,i)=>{
        return (
            <tr key={i}>
                <td>{users._id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.gender}</td>                            
                <td>{users.status}</td>
                <td className='action-btn-container'>
                    <button className='delete-btn' onClick={()=>{deleteBtn(users._id)}}><RiDeleteBin5Line /></button>
                    <button className='update-btn' onClick={()=>{updateBtn(users._id)}}><FaEdit /></button>
                </td>
            </tr>
        )
    })

    return (
        <div className="users-container">
            <div className="new-user-container">
                <Link to='/newuser'>
                    <button className="new-user-btn bg-dark text-light">New User</button>
                </Link>
            </div>
            <div className="users-info-container">
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr className='bg-dark text-light'>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>GENDER</th>
                            <th>STATUS</th>
                            <th>Action</th>
                        </tr>
                        {renderUsersDatas}
                    </tbody>
                </table>
            </div>
        </div>
    )
}