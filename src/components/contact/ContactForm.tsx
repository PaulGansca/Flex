import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Input } from '../Input';

// Email validation
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Form validation
const formValid = (
  formValues: {
    name: string;
    email: string;
    subject: string;
    message: string;
  },
  formErrors: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val: string) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(formValues).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

export const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const toastifySuccess = () => {
    toast.success('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  };

  const toastifyFail = () => {
    toast.error('Form failed to send!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValid(formValues, formErrors));
    if (formValid(formValues, formErrors)) {
      // Handle form validation success
      const { name, email, subject, message } = formValues;

      // Set template params
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      emailjs.send(
        import.meta.env.VITE_emailKey || '',
        import.meta.env.VITE_templateId || '',
        templateParams,
        import.meta.env.VITE_emailApiKey
      );

      console.log(`
            --SUBMITTING--
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
          `);

      toastifySuccess();
      resetForm();
    } else {
      setErrors();
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      toastifyFail();
    }
  };

  // Function to reset form
  const resetForm = () => {
    setFormValues({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const setErrors = () => {
    const formErrorsCopy = { ...formErrors };
    Object.keys(formErrorsCopy).forEach((name: string) => {
      switch (name) {
        case 'name':
          formErrorsCopy.name =
            formValues[name].length < 1 ? 'Please enter your name.' : '';
          break;
        case 'email':
          formErrorsCopy.email = emailRegex.test(formValues[name])
            ? ''
            : 'Please enter a valid email address.';
          break;
        case 'subject':
          formErrorsCopy.subject =
            formValues[name].length < 1 ? 'Please enter a subject.' : '';
          break;
        case 'message':
          formErrorsCopy.message =
            formValues[name].length < 1 ? 'Please enter a message' : '';
          break;
        default:
          break;
      }
    });
    setFormErrors(formErrorsCopy);
  };

  return (
    <div className="contact-form w-full bg-white sm:p-10 p-4 rounded-2xl">
      <form
        className="flex flex-col gap-5 w-full"
        id="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="flex gap-5">
          <Input
            type="text"
            name="name"
            value={formValues.name}
            className={``}
            onChange={handleChange}
            placeholder="Name"
            error={formErrors.name.length > 0 ? formErrors.name : undefined}
          ></Input>

          <Input
            type="email"
            name="email"
            value={formValues.email}
            className={``}
            onChange={handleChange}
            placeholder="Email"
            error={formErrors.email.length > 0 ? formErrors.email : undefined}
          ></Input>
        </div>
        <div className="w-full">
          <Input
            type="subject"
            name="subject"
            error={
              formErrors.subject.length > 0 ? formErrors.subject : undefined
            }
            value={formValues.subject}
            onChange={handleChange}
            placeholder="Subject"
          ></Input>
        </div>
        <div className="">
          <div className="">
            {!formValues.message ? (
              <></>
            ) : (
              <label
                htmlFor="message"
                className={`block mb-2 text-sm font-medium text-black ${
                  formErrors.message ? 'text-red-600' : ''
                }`}
              >
                Message
              </label>
            )}
            <textarea
              id="message"
              rows={5}
              name="message"
              value={formValues.message}
              className={`block p-2.5 w-full text-sm text-black placeholder:text-black outline-none bg-white rounded-lg border border-gray-300  ${
                formErrors.message
                  ? 'focus:ring-red-600 focus:border-red-600 border-red-600'
                  : 'focus:border-blue-500 focus:ring-blue-500'
              }`}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            {formErrors.message ? (
              <p id="message" className="mt-2 text-xs text-red-600 ">
                {formErrors.message}
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="text-white self-end font-title bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded-lg w-52 px-5 py-3 text-center"
        >
          Submit
        </button>
        <ToastContainer
          style={{ top: '-10em', right: '1em', height: '100%' }}
          autoClose={3000}
        />
      </form>
    </div>
  );
};
