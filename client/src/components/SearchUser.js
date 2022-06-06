import { Form} from 'react-bootstrap';

function SearchUser() {
    return (
        <div className="search-user-container">
            <h2>SEARCH USER</h2>
            <div className='search-bar-container'>
                <Form.Control size="lg" type="text" placeholder="Large text" />
            </div>
        </div>
    )
}

export default SearchUser