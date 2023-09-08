const InputEmail =({ cssStyle, labelText, id, register })=>{
    return(
        <div className={cssStyle}>
            <label htmlFor={id}>{labelText}</label>
            <input type="email" name={id} id={id} placeholder='user@email.com' autoComplete="true" {...register(id,{required:true})}/>
        </div>
    )
}
export default InputEmail

// {...register(id,{
//     required:{
//         value:true,
//         message:"please insert an e-mail adress"
//     },
//     pattern:{
//         value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//         message:"e-mail adress is not valid"
//     }
// })}