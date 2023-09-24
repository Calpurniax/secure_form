import ButtonFunctional from '../ButtonFunctional'
import { useProfileContext } from '../../context/ProfileContext';

const AllUsers =({allUsers, setAllUsers})=>{

    const { deleteUser } = useProfileContext();

    const handleDelete =(id)=>{
        const newArray = allUsers.filter(each=>each._id !==id )         
        deleteUser(id);
        setAllUsers(newArray);
    }
    const renderUsers=()=>{
        if(allUsers.length>0){
            return allUsers.map((eachUser)=>{
                return <li key={eachUser._id}>
                    <h3>{eachUser.username}</h3>
                    {eachUser.lastname && <p>Last Name: {eachUser.lastname}</p>}
                    {eachUser.name && <p>Name: {eachUser.name}</p>}
                    <p>Email:{eachUser.email}</p>
                    <p>id:{eachUser._id}</p>  
                    <ButtonFunctional id={eachUser._id} handleDelete={handleDelete} textValue={'Delete'}/>                  
                </li>
            })
        }
        else return <p>No hay usuarios</p>
    }

    return(
        <>
            <h2>Users</h2>
            <ul>{renderUsers()}</ul>
        </>       
    )
}
export default AllUsers