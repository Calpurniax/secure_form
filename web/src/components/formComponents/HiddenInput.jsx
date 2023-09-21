import "../../styles/contactForm.scss";
const HiddenInput = ({ id, register }) => {

    return (
        <div className="test">
            <label htmlFor={id}>Información</label>
            <input type="text" id={id} {...register(id)} />
        </div>
    )
}
export default HiddenInput