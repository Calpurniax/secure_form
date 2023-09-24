const FormButton =({type, textValue, id, handleDelete})=>{
    
    const handleClick=(ev)=>{
        const id= (ev.target.id)
        handleDelete(id)
    }
    return (
        <button type={type} onClick={handleClick} id={id}>
                {textValue}
        </button>
    )
}

export default FormButton