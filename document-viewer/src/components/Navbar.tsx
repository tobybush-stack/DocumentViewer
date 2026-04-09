import { Link } from "react-router-dom"
import "../css/NavBar.css"

function Navbar() {
    return(
        <>
        <h2>Navbar</h2>
        <Link to="/"></Link>
        <Link to="/Home">Document List</Link>
        </>
    )
}

export default Navbar

