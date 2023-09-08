const InputUserName =({ cssStyle, labelText, id, register })=>{
    return(
        <div className={cssStyle}>
            <label htmlFor={id}>{labelText}</label>
            <input type="text" name={id} id={id} placeholder='Dua Lipa' {...register(id)}/>
        </div>
    )
}
export default InputUserName