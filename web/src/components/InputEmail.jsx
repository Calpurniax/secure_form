const InputEmail =({ cssStyle, labelText, id, register, errors})=>{
    return(
        <div className={cssStyle}>
            <label htmlFor={id}>{labelText}</label>
            <input type="email" name={id} id={id} placeholder='user@email.com' autoComplete="true" {...register(id,{
                required:{
                    value:true,
                    message:'E-mail is required'
                },
                pattern:{
                    value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message:"e-mail adress is not valid"
                }
                })}/>
            {errors[id] && (<p>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputEmail

