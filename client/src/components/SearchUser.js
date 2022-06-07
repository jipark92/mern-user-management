import { Form, Button} from 'react-bootstrap';
import { AiOutlineUser,AiOutlineMail, AiOutlinePhone,AiOutlineInteraction,AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbListNumbers,TbGenderBigender } from "react-icons/tb";
import { HiStatusOnline, HiOutlineIdentification } from "react-icons/hi";
import {BsCalendarDate } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {useState,useEffect} from 'react'
import  Axios  from 'axios';

function SearchUser() {

    const [inputValue, setInputValue] = useState()
    const [userDatas, setUserDatas] = useState([])

    const searchBtn = ()=>{
        console.log('search clicked')
    }

    useEffect(()=>{
        Axios.get('http://localhost:3001/')
        .then(res=>{
            setUserDatas(res.data)
            console.log(userDatas)
        })
    },[])

    const filterDisplay = userDatas.map((user,i)=>{
        return (
            <div>
                <p>hello {user.name}</p>
            </div>
        )
    })

    return (
        <div className="search-user-container">
            {filterDisplay}

            <h2>SEARCH USER</h2>
            <div className='search-bar-container'>
                <Form.Control size="lg" type="text" placeholder="Search user..." onChange={(e)=>{
                    setInputValue(e.target.value)
                    console.log(inputValue)
                    }}/>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={searchBtn}>
                        Search
                    </Button>
                </div>
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
                        {/* <tr className='loading-container'><td><AiOutlineLoading3Quarters className='loading-icon'/></td></tr> */}
                    </tbody>
                </table>
        </div>
    )
}

export default SearchUser