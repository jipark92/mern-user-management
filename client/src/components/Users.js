
export default function Users() {
    return (
        <div className="users-container">

            <div className="new-user-container">
                <button className="new-user-btn bg-dark text-light">New User</button>
            </div>
            <div className="users-info-container">
                <header className="labels-container bg-dark text-light">
                    <p>ID</p>
                    <p>Name</p>
                    <p>Email</p>
                    <p>Gender</p>
                    <p>Status</p>
                </header>
            </div>
        </div>
    )
}
