const AllUsers =({allUsers})=>{
    const renderUsers=()=>{
        if(allUsers.length>0){
            return allUsers.map((eachUser)=>{
                return <li key={eachUser._id}>
                    <h3>{eachUser.username}</h3>
                    <p>Email:{eachUser.email}</p>
                    <p>id:{eachUser._id}</p>
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