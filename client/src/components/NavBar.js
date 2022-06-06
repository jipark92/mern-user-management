import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';


export default function NavBar() {



    return (
        <header className='title-container'>
            <Link to='/'>
                <h1 className='text-light'>User Management</h1>
            </Link>
            <div>
            {/* <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Search" />
                </Form.Group>
            </Form> */}
            </div>
            <Link to='/newuser'>
                <button className="new-user-btn ">ADD USER</button>
            </Link>
        </header>
    )
}