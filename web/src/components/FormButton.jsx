const FormButton =({disabledStyle, activeStyle, type, textValue, disabled})=>{
   
    return (
        <button className={disabled?disabledStyle:activeStyle} type={type} disabled={disabled}>
                {textValue}
        </button>
    )
}

export default FormButton

