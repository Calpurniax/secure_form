import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendMessage } from '../services/auth'
import InputEmail from "../components/InputEmail"
import InputText from "../components/InputText";
import Button from "../components/Button";
import Captcha from '../components/Captcha';


const ContactForm =()=>{
    const [contactStatus, setContactStatus] = useState(null)
    const [captchaIsOK, setcaptchaIsOK] = useState(false)

    const { register, handleSubmit, reset, formState: {
        errors
    } } = useForm();

    const onSubmit = handleSubmit(async (message) => {
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