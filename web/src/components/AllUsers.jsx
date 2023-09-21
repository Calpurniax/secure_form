const AllUsers =({allUsers})=>{
    const renderUsers=()=>{
        if(allUsers.lenght>0){
            return allUsers.map((eachUser)=>{
                return <li key={eachUser._id}>
                    {eachUser.email}
                </li>
            })
        }
    }
        
    return(
        <>
            <h2>holi</h2>
            <ul>{renderUsers()}</ul>
        </>
        

    )
}
export default AllUsers