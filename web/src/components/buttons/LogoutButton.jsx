import { useLoginContext } from '../../context/LogInContext'

const LogoutButton = () => {
  const { logoutFunction, cookieToken } = useLoginContext();

  const handleClick = () => {
    logoutFunction(cookieToken);
  };
  
  return (
    <div className='h-screen flex items-center justify-center'>
       <button className='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100' onClick={handleClick}>Log Out</button>
    </div>
  )
} 
export default LogoutButton;
