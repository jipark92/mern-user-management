import { Link } from 'react-router-dom'
// import { Button, Form } from 'react-bootstrap';

export default function NavBar() {

    return (
        <header className='title-container'>
            <Link to='/'>
                <h1 className='text-light'>User Management</h1>
            </Link>
            <div>
                <Link to='/searchuser'>
                    <button className='search-user-btn'>SEARCH USER</button>
                </Link>
                <Link to='/newuser'>
                    <button className="new-user-btn ">ADD USER</button>
                </Link>
            </div>
        </header>
    )
}