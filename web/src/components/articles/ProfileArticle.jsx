import DeleteButton from '../buttons/DeleteButton'

const ProfileArticle =({user, handleDelete})=>{     
    return(        
        <article className='border border-gray-200 p-3 w-64 h-64 shadow flex flex-col justify-around'>
          <h3 className='mb-2 text-lg font-bold text-transform: uppercase'>{user.username}</h3>
          <p><span className='italic'>Email:</span> {user.email}</p>
          <p><span className='italic'>Id:</span> {user.id}</p>                 
          <p><span className='italic'>Role:</span> {user.role}</p>        
          {user.lastname && <p><span className='italic'>Last Name:</span> {user.lastname}</p>}
          {user.name && <p><span className='italic'>Name:</span> {user.name}</p>}  
          <DeleteButton id={user.id} handleDelete={handleDelete} textValue='Delete'/>        
        </article>      
    )
}
export default ProfileArticle