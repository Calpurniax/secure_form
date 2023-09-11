const InputUserName =({ cssStyle, labelText, id, placeholder, register, errors })=>{
    return(
        <div className={cssStyle}>
            <label htmlFor={id}>{labelText}</label>
            <input type="text" name={id} id={id} placeholder={placeholder} {...register(id, {
                required:{
                value:true,
                message:"This field is required"
                }
            })}/>
            {errors[id] && (<p>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputUserName