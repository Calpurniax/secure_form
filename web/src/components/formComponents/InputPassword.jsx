const InputPassword = ({ cssStyle, labelText, id, register, errors }) => {
    return (
        <div className={cssStyle}>
            <label htmlFor={id}>{labelText}</label>
            <input type="password" name={id} id={id} {...register(id,{
                required:{
                    value:true,
                    message: "Password is required"
                },
                // pattern:{
                //     value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                //     message: "Password needs to have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                // }                
            })} />
            {errors[id] && (<p>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputPassword

