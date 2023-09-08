const InputPassword = ({ cssStyle, labelText, id, register }) => {
    return (
        <div className={cssStyle}>
            <label htmlFor={id}>{labelText}</label>
            <input type="password" name={id} id={id} {...register(id)} />
        </div>
    )
}
export default InputPassword