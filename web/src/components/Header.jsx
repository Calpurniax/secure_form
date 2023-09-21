import "../styles/header.scss";
import { Link } from 'react-router-dom';
import { useLoginContext } from '../context/LogInContext';

const Header = () => {
    const { isAdmin, isLoggedIn } = useLoginContext();

    return (
        <header className="header">
            <nav>
                <ul className="header__list">
                    <li>
                        <Link className="header__list__element" to="/">Home</Link>
                    </li>
                    {
                        isLoggedIn ?
                            <li>
                                <Link className="header__list__element" to="/logout">Logout</Link>
                            </li> :
                            <li>
                                <Link className="header__list__element" to="/login">Login</Link>
                            </li>
                    }
                    <li>
                        <Link className="header__list__element" to="/contact">Contact</Link>
                    </li>
                    {isLoggedIn && <li>
                        <Link className="header__list__element" to="/messages">Messages</Link>
                    </li>}
                    {isAdmin && <li>
                        <Link className="header__list__element" to="/panel" >Panel </Link>
                    </li>}
                </ul>
            </nav>
        </header>
    )
}
export default Header

