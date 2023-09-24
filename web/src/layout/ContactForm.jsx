import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../schemas/formSchema";
import { sendMessage } from '../services/msgAndUsers'
import InputEmail from "../components/formComponents/InputEmail"
import InputText from "../components/formComponents/InputText";
import InputName from '../components/formComponents/InputName';
import FormButton from "../components/FormButton";
import HiddenInput from '../components/formComponents/HiddenInput';
import Captcha from '../components/Captcha';


const ContactForm = () => {
    const [contactStatus, setContactStatus] = useState(null)
    const [captchaIsOK, setcaptchaIsOK] = useState(false)

    const { register, handleSubmit, reset, formState: {
        errors, dirtyFields
    } } = useForm({
        defaultValues: {
            contact_email: '',
            contact_name: '',
            contact_subject: '',
            contact_message: '',
            contact_testInput1: '',
            contact_testInput2: ''
        },
        resolver: yupResolver(contactSchema)
    });


    const onSubmit = handleSubmit(async (message) => {
        if (dirtyFields.contact_testInput1 || dirtyFields.contact_testInput2) {
            return console.log('not valid form')
        }
        if (captchaIsOK) {
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

    return (
        <section>
            <form className='form__contact' onSubmit={onSubmit}>
                <InputEmail
                    cssStyle={'form__contact__input'}
                    labelText={'E-mail'}
                    id={'contact_email'}
                    register={register}
                    errors={errors} />
                <InputName
                    cssStyle={'form__contact__input'}
                    labelText={'Name'}
                    id={'contact_name'}
                    register={register}
                    errors={errors}
                    placeholder='Dua Lipa' />
                <InputText
                    cssStyle={'form__contact__input'}
                    labelText={'Subject'}
                    id={'contact_subject'}
                    register={register}
                    errors={errors}
                    placeholder='Salutations!'
                    maxChar={120} />
                <InputText
                    cssStyle={'form__contact__input'}
                    labelText={'Message'}
                    id={'contact_message'}
                    register={register}
                    errors={errors}
                    placeholder='Your message here'
                    maxChar={400} />
                <HiddenInput id='contact_testInput1' register={register} />
                <HiddenInput id='contact_testInput2' register={register} />
                {contactStatus && (<p>{contactStatus}</p>)}
                {captchaIsOK ? <p>Captcha is correct</p> :
                    <Captcha setcaptchaIsOK={setcaptchaIsOK} />}
                <FormButton type={"submit"}
                    textValue={"Send Message"} disabled={!captchaIsOK} />
            </form>
        </section>
    )
}
export default ContactForm