import "../styles/header.scss";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="header__list">
                    <li>
                        <Link className="header__list__element" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="header__list__element" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="header__list__element" to="/register">Register</Link>
                    </li>

                    <li>
                        <Link className="header__list__element" to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
export default Header

