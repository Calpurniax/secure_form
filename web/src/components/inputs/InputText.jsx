const InputText = ({ cssStyle, labelStyle, inputStyle,errorStyle, labelText, id, placeholder,register, errors, maxChar }) => {
   
    return (
        <div className={cssStyle}>
            <label htmlFor={id} className={labelStyle}>{labelText}</label>
            <input type="text" className={inputStyle} name={id} id={id} placeholder={placeholder} {...register(id, {
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
            {errors[id] && (<p className={errorStyle}>{errors[id]?.message}</p>)}
        </div>
    )
}
export default InputText