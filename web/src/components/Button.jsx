const Button =({type, textValue, disabled})=>{
    return (
        <button type={type} disabled={disabled}>
                {textValue}
        </button>
    )
}

export default Button