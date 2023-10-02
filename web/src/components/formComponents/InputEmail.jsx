const InputEmail =({ cssStyle, labelStyle, inputStyle, errorStyle, labelText, id, register, errors})=>{
    return(
        <div className={cssStyle}>
            <label htmlFor={id} className={labelStyle}>{labelText}</label>
            <input type="email" className={inputStyle} name={id} id={id} placeholder='user@email.com' autoComplete="true" {...register(id,{
                required:{
                    value:true,
                    message:'E-mail is required'
                },
                pattern:{
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message:"e-mail address is not valid"
                },
                maxLength:{
                    value:100,
                    message:`This field should be less than 100 characters`
                },
                })}/>
            {errors[id] && (<p className={errorStyle}>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputEmail

