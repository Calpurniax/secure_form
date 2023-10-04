import { useLoginContext } from '../context/LogInContext';

const Logout = () => {
  const { logoutFunction, cookieToken } = useLoginContext();

  const handleClick = () => {
    logoutFunction(cookieToken);
  };
  return (
    <div className='flex flex-row justify-center mt-6'>
       <button className='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100' onClick={handleClick}>Log Out</button>
    </div>
  )
}
 
export default Logout;
