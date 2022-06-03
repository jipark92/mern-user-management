import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useState , useEffect} from 'react'

export default function UpdateUser() {

    const [updateName, setUpdateName ] = useState('')
    const [updateEmail, setUpdateEmail ] = useState('')
    const [updateAge, setUpdateAge ] = useState('')
    const [updatePhone, setUpdatePhone ] = useState('')
    const [updateGender, setUpdateGender ] = useState('')
    const [updateStatus, setUpdateStatus ] = useState('')


    const updateUser = () => {
        console.log('clicked update user')
    }

    return (
        <div className="update-user-container">
            <div className='update-form-container bg-dark text-light'>
                <h3>Update User Form</h3>
                <Form className='update-form'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"/>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"/>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number"/>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                    <Form.Label>Status</Form.Label>
                    <Form.Select>
                        <option value="Male">Active</option>
                        <option value="Female">Inactive</option>
                    </Form.Select>
                    <div className='d-grid gap-1'>
                        <Button variant="primary" type="submit" onClick={(e)=>{
                            e.preventDefault()
                            updateUser()
                        }}>Submit</Button>
                        <Link to='/' className='d-grid'>
                            <Button variant="primary" type="submit">Go Back</Button>
                        </Link>
                    </div>
                </Form>
            </div>
            
            <svg className='footer-bg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 320"><path fill="#273036" fillOpacity="1" d="M0,256L48,218.7C96,181,192,107,288,96C384,85,480,139,576,154.7C672,171,768,149,864,165.3C960,181,1056,235,1152,229.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}