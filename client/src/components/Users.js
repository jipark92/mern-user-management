import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Users() {

    const [userDatas, setUserDatas] = useState([])

    useEffect(()=>{
        Axios.get(`http://localhost:3001/`)
        .then(res=>{
            setUserDatas(res.data)
            console.log(res.data)
        })
    },[])

    const renderUsersDatas = userDatas.map((users,i)=>{
        return (
            <tr key={i}>
                <td>{users._id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.gender}</td>                            
                <td>{users.status}</td>
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
                        </tr>
                        {renderUsersDatas}
                    </tbody>
                </table>
            </div>
        </div>
    )
}