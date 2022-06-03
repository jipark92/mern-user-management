import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineUser,AiOutlineMail, AiOutlinePhone,AiOutlineInteraction } from "react-icons/ai";
import { TbListNumbers,TbGenderBigender } from "react-icons/tb";
import { HiStatusOnline, HiOutlineIdentification } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";

export default function Users() {

    const [userDatas, setUserDatas] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(false)
    const [addStatus, setAddStatus] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)

    useEffect(()=>{
        Axios.get(`http://localhost:3001/`)
        .then(res=>{
            setUserDatas(res.data)
        })
    },[userDatas])

    const deleteBtn = (id) => {
        console.log('clicked delete')
        Axios.delete(`http://localhost:3001/deleteuser/${id}`)
        setDeleteStatus(true)
        setTimeout(() => {
            setDeleteStatus(false)
        }, 2500);
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
                <td>{users.age}</td>
                <td>{users.phone}</td>
                <td>{users.gender}</td>                            
                <td>{users.status}</td>
                <td style={{display:'flex', justifyContent:'space-evenly'}}>
                    <li className='delete-btn' onClick={()=>{deleteBtn(users._id)}}><RiDeleteBin5Line /></li>
                    <li className='update-btn' onClick={()=>{updateBtn(users._id)}}><FaEdit /></li>
                </td>
            </tr>
        )
    })

    return (
        <div className="users-container">
            <div className="users-info-container">
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr className='bg-dark text-light'>
                            <th>ID<HiOutlineIdentification/></th>
                            <th>NAME <AiOutlineUser/></th>
                            <th>EMAIL<AiOutlineMail/></th>
                            <th>AGE<TbListNumbers/></th>
                            <th>PHONE<AiOutlinePhone/></th>
                            <th>GENDER<TbGenderBigender/></th>
                            <th>STATUS<HiStatusOnline/></th>
                            <th>DELETE<AiOutlineInteraction/></th>
                        </tr>
                        {renderUsersDatas}
                    </tbody>
                </table>
                <div className="new-user-container">
                    <Link to='/newuser'>
                        <button className="new-user-btn bg-dark text-light">Add New User</button>
                    </Link>
                    {addStatus ? <p style={{color:"green",fontSize:"1.1rem", fontWeight:"700"}}>USER ADDED</p>: ""}
                    {deleteStatus ? <p style={{color:"red",fontSize:"1.1rem", fontWeight:"700"}}>USER DELETED</p>: ""}
                    {updateStatus ? <p style={{color:"blue",fontSize:"1.1rem", fontWeight:"700"}}>USER UPDATED</p>: ""}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,96C384,85,480,139,576,154.7C672,171,768,149,864,165.3C960,181,1056,235,1152,229.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}