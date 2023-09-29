import { useLoginContext } from '../context/LogInContext';

const Logout = () => {
  const { logoutFunction, cookieToken } = useLoginContext();

  const handleClick = () => {
    logoutFunction(cookieToken);
  };
  return <button onClick={handleClick}>Log Out</button>;
};
export default Logout;
