
import Axios from 'axios'
import {useState, useEffect} from 'react'

export default function UpdateModal(props) {

    const [newName, setNewName] = useState('')

    const updateBtn = (id) => {
        console.log('clicked update')
        // const newName = prompt('enter new name')
        // if(!newName) return
        console.log(props.userId)
        
        Axios.put('http://localhost:3001/updateuser',{
            id: id,
            newName: newName,
        })
    }

    return (
        <div className="update-modal-container">
            <label>Name</label>
            <input type="text" value={newName} onChange={(e)=>{
                setNewName(e.target.value)
                }}/>
            <button onClick={()=>{
                updateBtn(props.userId)
                props.handleClose()
            }}>CLOSE</button>
        </div>
    )
}