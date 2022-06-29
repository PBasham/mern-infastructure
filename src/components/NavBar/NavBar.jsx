import './NavBar.css'
import { Link } from 'react-router-dom'
import * as userService from "../../utilities/users-service.js"

export default function NavBar({user, setUser}) {

    const handleLogOut = () => {
        // Delegate to the usersj-service module
        userService.logOut()
        // update state will also cause a re-render
        setUser(null)
    }

    return (
    <nav className="nav-bar">
        <Link to="/orders" > Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new" >New Order</Link>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        <br />
         Welcome, {user.name}
    </nav>

    )
}
