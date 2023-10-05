import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../schemas/formSchema';
import { sendMessage } from '../services/msgEndpoints';
import InputEmail from './inputs/InputEmail';
import InputText from './inputs/InputText';
import InputName from './inputs/InputName';
import FormButton from './buttons/FormButton';
import HiddenInput from './inputs/HiddenInput';
import Captcha from './Captcha';

const ContactForm = () => {
  const [contactStatus, setContactStatus] = useState(null);
  const [captchaIsOK, setcaptchaIsOK] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      contact_email: '',
      contact_name: '',
      contact_subject: '',
      contact_message: '',
      contact_testInput1: '',
      contact_testInput2: '',
    },
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = handleSubmit(async (message) => {
    if (dirtyFields.contact_testInput1 || dirtyFields.contact_testInput2) {
      return console.log('not valid form');
    }
    if (captchaIsOK) {
      try {
        const res = await sendMessage(message);
        if (res.status === 201) {
          setContactStatus('Great! The message was send');
          reset();
          setcaptchaIsOK(false);
        }
      } catch (error) {
        setContactStatus('Sorry, the message was not send');
      }
    }
  });

  return (  
    <section className='flex flex-col items-center justify-center mt-6'>
      <h2 className='mb-6 text-2xl'>Tell us what is on your mind</h2>
      <form className='w-4/5 p-3 bg-zinc-200 mb-8' onSubmit={onSubmit}>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <InputEmail
            cssStyle='w-full md:w-1/2 px-3 mb-6 md:mb-0'
            labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            inputStyle='appearance-none block w-full text-gray-700 py-3 px-4 mb-3 leading-tight'
            errorStyle='text-red-500 text-xs italic'
            labelText='E-mail'
            id='contact_email'
            register={register}
            errors={errors}
          />
          <InputName
            cssStyle='w-full md:w-1/2 px-3'
            labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            inputStyle='appearance-none block w-full text-gray-700 py-3 px-4 leading-tight'
            errorStyle='text-red-500 text-xs italic'
            labelText='Name'
            id='contact_name'
            register={register}
            errors={errors}
            placeholder='Dua Lipa'
          />
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <InputText
            cssStyle='w-full px-3'
            labelStyle='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            inputStyle='appearance-none block w-full text-gray-700 py-3 px-4 mb-3 leading-tight'
            errorStyle='text-red-500 text-xs italic'
            labelText='Subject'
            id='contact_subject'
            register={register}
            errors={errors}
            placeholder='Salutations!'
            maxChar={120}
          />
        </div>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-full px-3'>
            <label
              htmlFor='contact_message'
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            >
              Message
            </label>
            <textarea
              className='appearance-none block w-full text-gray-700 py-3 px-4 mb-3 leading-tight'
              name='contact_message'
              id='contact_message'
              placeholder='Your message here'
              {...register('contact_message', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                maxLength: {
                  value: 400,
                  message: `This field should be less than 400 characters`,
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: 'Only letters are allowed for this field',
                },
              })}
            />
            {errors['contact_message'] && (
              <p className='text-red-500 text-xs italic'>
                {errors['contact_message']?.message}
              </p>
            )}
          </div>
        </div>
        <HiddenInput id='contact_testInput1' register={register} />
        <HiddenInput id='contact_testInput2' register={register} />
        {contactStatus && <p className='mb-3'>{contactStatus}</p>}
        <div className='flex flex-row justify-between mb-6 items-end'>
          {captchaIsOK ? (
            <p>Captcha is correct</p>
          ) : (
            <Captcha setcaptchaIsOK={setcaptchaIsOK} />
          )}
          <FormButton
              disabledStyle='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
              activeStyle='bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100'
            type={'submit'}
            textValue={'Send Message'}
            disabled={!captchaIsOK}
          />
        </div>
      </form>
    </section>
    
  );
};
export default ContactForm;
