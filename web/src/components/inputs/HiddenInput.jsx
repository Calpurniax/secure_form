const HiddenInput = ({ id, register }) => {

    return (
        <div className='collapse'>
            <label htmlFor={id}>Información</label>
            <input type="text" id={id} {...register(id)} />
        </div>
    )
}
export default HiddenInput