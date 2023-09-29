const ProfileArticle =({user})=>{   
    return(        
        <article>
          <h3>User: {user.username}</h3>
          <p>Email: {user.email}</p>
          <p>Id: {user.id}</p>                 
          <p>Role: {user.role}</p>        
          {user.lastname && <p>Last Name: {user.lastname}</p>}
          {user.name && <p>Name: {user.name}</p>}          
        </article>      
    )
}
export default ProfileArticle