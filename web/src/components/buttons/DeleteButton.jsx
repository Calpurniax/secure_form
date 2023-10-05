const DeleteButton =({type, textValue, id, handleDelete})=>{
    
    const handleClick=(ev)=>{       
        const id= (ev.target.id)
        handleDelete(id)
    }
    return (
        <button type={type} className='bg-red-500 text-white font-bold py-2 px-4 rounded opacity-100' onClick={handleClick} id={id}>
                {textValue}
        </button>
    )
}

export default DeleteButton