
import { useLoginContext } from '../context/LogInContext';

const Logout =()=>{

    const {logoutFunction, cookieToken} = useLoginContext()

    const handleClick=()=>{
        console.log('holi')
        logoutFunction(cookieToken)
    }
    return(
        <button onClick={handleClick}>Log Out</button>
    )
}
export default Logout