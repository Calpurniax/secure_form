const InputText = ({ cssStyle, labelText, id, placeholder,register, errors, maxChar }) => {
   
    return (
        <div className={cssStyle}>
            <label htmlFor={id}>{labelText}</label>
            <input type="text" name={id} id={id} placeholder={placeholder} {...register(id, {
                required: {
                    value: true,
                    message: "This field is required"
                },
                maxLength: {
                    value: maxChar,
                    message: `This field should be less than ${maxChar} characters`
                },
                pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Only letters are allowed for this field",
                }
            })} />
            {errors[id] && (<p>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputText