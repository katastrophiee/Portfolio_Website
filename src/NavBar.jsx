import "./Styles/NavBarStyle.css";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavBar() {
    const path = window.location.pathname;

    return (
        <nav className="navbar">
            <Link to="/" className="site-title">Wowow</Link>
            <ul>
                <CustomLink to="/Screens/About" buttonText="About" />
                <CustomLink to="/Screens/Lol" buttonText="Lol" />
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