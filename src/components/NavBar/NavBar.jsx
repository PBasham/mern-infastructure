import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar(props) {

    return (
    <nav className="nav-bar">
        <Link to="/orders" > Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new" >New Order</Link>
        <br />
         Welcome, {props.user.name}
    </nav>

    )
}
