import "../styles/header.scss";
import { Link } from 'react-router-dom';
import { useLoginContext } from '../context/LogInContext';

const Header = () => {
    const { isAdmin, isLoggedIn, user } = useLoginContext();
   
    const renderOwnProfile=()=>{
        if(!isAdmin && isLoggedIn) return (
        <li>
            <Link className="header__list__element" to={ `/profile/${user.id}`}>Profile</Link>
        </li>
    )}
    return (
        <header className="w-full p-4 mb-5 shadow-">
            <nav>
                <ul className="flex flex-row justify-between">
                    <li>
                        <Link className="" to="/">Home</Link>
                    </li>                 
                    <div className="flex flex-row gap-6">
                        <li>
                            <Link className="" to="/contact">Contact</Link>
                        </li>
                        {isLoggedIn && <li>
                            <Link className="" to="/messages">Messages</Link>
                        </li>}
                        {isAdmin && <li>
                            <Link className="" to="/panel" >Panel </Link>
                        </li>}
                        { isLoggedIn ?
                        <li>
                            <Link className="" to="/logout">Logout</Link>
                        </li> :
                        <li>
                            <Link className="" to="/login">Login</Link>
                        </li>}
                        {renderOwnProfile()}
                    </div>
                </ul>
            </nav>
        </header>
    )
}
export default Header

