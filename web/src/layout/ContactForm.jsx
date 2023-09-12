import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendMessage } from '../services/auth'
import InputEmail from "../components/InputEmail"
import InputText from "../components/InputText";
import Button from "../components/Button";
import HiddenInput from '../components/HiddenInput';
import Captcha from '../components/Captcha';


const ContactForm =()=>{
    const [contactStatus, setContactStatus] = useState(null)
    const [captchaIsOK, setcaptchaIsOK] = useState(false)
    const [testInputs, setTestInputs]=useState ({
        testInput1:'',
        testInput2:''
    });
    const { register, handleSubmit, reset, formState: {
        errors
    } } = useForm();

    const handleTestInputs=(value, id)=>{
        setTestInputs({...testInputs, [id]:value})
    }
    const onSubmit = handleSubmit(async (message) => {
        if(testInputs.testInputs1 !== '' || testInputs.testInputs2 !== ''){
            return console.log("no válido")
        }
        if(captchaIsOK){
            try {
                const res = await sendMessage(message)
                if (res.status === 201) {
                    setContactStatus('Great! The message was send')
                    reset()
                    setcaptchaIsOK(false)
                }            
            } catch (error) {
                setContactStatus('Sorry, the message was not send')
            }
        }        
    })

    return(
        <section>
            <form className='form__contact' onSubmit={onSubmit}>
                <InputEmail
                cssStyle={'form__contact__input'}
                labelText={'E-mail'}
                id={'contact_email'}
                register={register}
                errors={errors} />
                <InputText
                 cssStyle={'form__contact__input'}
                 labelText={'Name'}
                 id={'contact_name'}
                 register={register}
                 errors={errors}
                 placeholder='Dua Lipa'/>
                <InputText
                 cssStyle={'form__contact__input'}
                 labelText={'Subject'}
                 id={'contact_subject'}
                 register={register}
                 errors={errors}
                 placeholder='Salutations!'/>
                <InputText
                cssStyle={'form__contact__input'}
                labelText={'Message'}
                id={'contact_message'}
                register={register}
                errors={errors}
                placeholder='Your message here'/>
                <HiddenInput id='testInput1' value={testInputs.testInput1} handleTestInputs={handleTestInputs}/>
                <HiddenInput id='testInput2' value={testInputs.testInput2} handleTestInputs={handleTestInputs}/>
                 {contactStatus && (<p>{contactStatus}</p>)}
                 {captchaIsOK? <p>Captcha is correct</p>:
                 <Captcha setcaptchaIsOK={setcaptchaIsOK}/>}                 
                 <Button type={"submit"}
                textValue={"Send Message"} disabled={!captchaIsOK}/>
            </form>
        </section>
    )
}
export default ContactForm