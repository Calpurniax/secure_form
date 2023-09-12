const InputName =({ cssStyle, labelText, id, placeholder, register, errors, pattern })=>{
    return(
        <div className={cssStyle}>
            <label htmlFor={id}>{labelText}</label>
            <input type="text" name={id} id={id} placeholder={placeholder} {...register(id, {
                required:{
                    value:true,
                    message:"This field is required"
                }, 
                maxLength:{
                    value:80,
                    message:`This field should be less than 80 characters`
                },
                pattern:{
                    value:/^[a-zA-Z]+$/,
                    message:"Name should contains only letters"
                },
            })}/>
            {errors[id] && (<p>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputName