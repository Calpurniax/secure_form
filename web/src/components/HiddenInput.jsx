import "../styles/contactForm.scss";
const HiddenInput =({value, id, handleTestInputs})=>{

    const handleChange=(ev)=>{        
        handleTestInputs(ev.target.value, ev.target.id)
    }

    return(
        <div className="test">
            <label htmlFor="test">Información</label>
            <input type="text"  id={id} value={value} onChange={handleChange}/>
        </div>
    )
}
export default HiddenInput