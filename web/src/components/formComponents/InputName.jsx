const InputName =({ cssStyle, labelStyle,inputStyle, errorStyle, labelText, id, placeholder, register, errors })=>{
    return(
        <div className={cssStyle}>
            <label htmlFor={id} className={labelStyle}>{labelText}</label>
            <input type="text" className={inputStyle}name={id} id={id} placeholder={placeholder} {...register(id, {
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
            {errors[id] && (<p className={errorStyle}>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputName