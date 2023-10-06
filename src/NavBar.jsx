import "./Styles/NavBarStyle.css";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Logo from "./Assets/name.png";

export default function NavBar() {
     return (
        <nav className="navbar">
            <img className="logo" src={Logo} alt="" />
            {/* <Link to="/" className="home-page-link">Home</Link> */}
            <ul>
                <CustomLink to="/" buttonText="Home" />
                <CustomLink to="/Screens/About" buttonText="About" />
                <CustomLink to="/Screens/Art" buttonText="Art" />
                <CustomLink to="/Screens/Funny" buttonText="Funny" />
            </ul>
        </nav>
    );
}

function CustomLink({ to, buttonText, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch(resolvedPath.pathname, true);

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props} >{buttonText}</Link>
        </li>
    )
}