
export default function UpdateForm(props) {
    return (
        <div className="update-form-container">
            <h2 className="update-form-title">Update Form</h2>
                <form className="update-form">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name'  required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email'  required/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type='number' name='age' id='age'  maxLength="3" required/>
                        <label htmlFor="phone">Phone</label>
                        <input type='number' name='phone' id='phone' maxLength="10" required/>
                    </div>
                    <div>
                    <label htmlFor="gender">Gender</label>
                        <select name='gender' id='gender'  required>
                            <option value="Male" >Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <label htmlFor="status">Status</label>
                        <select name='status' id='status'>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <button className="update-btn bg-dark text-light" onClick={(e)=>{
                        e.preventDefault()
                        props.handleClose()
                        }}>Update User</button>
                </form>
        </div>
    )
}