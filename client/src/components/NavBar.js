import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className='title-container bg-dark text-light'>
            <Link to='/'>
                <h1 className='text-light'>User Management</h1>
            </Link>
            <Link to='/newuser'>
                <button className="new-user-btn ">ADD USER</button>
            </Link>
        </header>
    )
}