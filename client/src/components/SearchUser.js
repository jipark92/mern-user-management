import { Form, Button} from 'react-bootstrap';
import { AiOutlineUser,AiOutlineMail, AiOutlinePhone,AiOutlineInteraction,AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbListNumbers,TbGenderBigender } from "react-icons/tb";
import { HiStatusOnline, HiOutlineIdentification } from "react-icons/hi";
import {BsCalendarDate } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {useState,useEffect} from 'react'
import  Axios  from 'axios';
import UpdateModal from './UpdateUserModal';

function SearchUser() {

    const [searchUser, setSearchUser] = useState()
    const [userDatas, setUserDatas] = useState([])
    const [rowDatas, setRowDatas] = useState([])
    const [show , setShow] = useState(false)

    useEffect(()=>{
        Axios.get('http://localhost:3001/')
        .then(res=>{
            setUserDatas(res.data)
            setRenderUser(filterDisplay)
        })
    },[searchUser, userDatas])

    //delete api data
    const deleteBtn = (id) => {
        console.log('clicked delete')
        Axios.delete(`http://localhost:3001/deleteuser/${id}`)
    }

    //modal close 
    const handleClose = () =>{
        setShow(false)
    }

    //filter 
    const filterDisplay = userDatas.filter((users,i)=>{
        if(searchUser === ""){
            return users
        } else if (users.name.includes(searchUser) ){
            return users
        }
    }).map((users,i)=>{
        return (
            <tr key={users._id}>
                <td>{users._id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.age}</td>
                <td>{users.phone}</td>
                <td>{users.gender}</td>                            
                <td>{users.status}</td>
                <td>{users.date}</td>
                <td style={{display:'flex', justifyContent:'space-evenly'}}>
                    <li className='delete-btn' onClick={()=>{deleteBtn(users._id)}}><RiDeleteBin5Line /></li>
                    <li className='update-btn' onClick={()=>{
                        setRowDatas(users)
                        setShow(true)}}><FaEdit/></li>
                    {show? <UpdateModal
                    handleClose={handleClose}
                    rowDatas={rowDatas}
                    />:""}
                </td>
            </tr>
        )
    })

    const [renderUser, setRenderUser] = useState()

    return (
        <div className="search-user-container">
            <h2>SEARCH USER</h2>
            <div className='search-bar-container'>
                <Form.Control size="lg" type="text" placeholder="Search user..." name="searchuser" defaultValue={searchUser} onChange={(e)=>{
                    setSearchUser(e.target.value)
                    console.log(searchUser)
                    }}/>
            </div>

            <table style={{width: "100%"}}>
                    <tbody>
                        <tr className='table-header-container'>
                            <th>ID<HiOutlineIdentification/></th>
                            <th>NAME<AiOutlineUser/></th>
                            <th>EMAIL<AiOutlineMail/></th>
                            <th>AGE<TbListNumbers/></th>
                            <th>PHONE<AiOutlinePhone/></th>
                            <th>GENDER<TbGenderBigender/></th>
                            <th>STATUS<HiStatusOnline/></th>
                            <th>DATE ADDED <BsCalendarDate/></th>
                            <th>ACTION<AiOutlineInteraction/></th>
                        </tr>
                        {renderUser}
                    </tbody>
                </table>
        </div>
    )
}

export default SearchUser