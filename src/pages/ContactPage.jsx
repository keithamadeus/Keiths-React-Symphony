import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [emailValidFormat, setEmailValidFormat] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  function handleNameChange(e) {
    setName(e.target.value);
    setNameValid(Boolean(e.target.value));
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailValid(Boolean(e.target.value))
    if (e.target.value) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setEmailValidFormat(re.test(String(e.target.value).toLowerCase()));
    }
    else {
      setEmailValidFormat(true)
    }
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
    setMessageValid(Boolean(e.target.value));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (name && email && message && emailValidFormat) {
      emailjs.send('service_h8lzrin', 'template_ge91f4r', {
        name,
        email,
        message,
      }, 'TFFZTSYzadBHVHAxd')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
    } else {
      alert('Please fill out all fields correctly.');
    }
  }

  function updateValidation() {
    handleNameChange({ target: { value: name } });
    handleEmailChange({ target: { value: email } });
    handleMessageChange({ target: { value: message } });
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>
            Name
            <input value={name} type="text" className="form-control" required={true} onChange={handleNameChange}></input>
            {!nameValid && <small className="form-text text-danger" >No name entered</small>}
          </label>
        </div>
        <div className="form-group">
          <label>
            Email Address
            <input value={email} type="email" className="form-control" required={true} onChange={handleEmailChange}></input>
            {!emailValid && <small className="form-text text-danger" >No email entered</small>}
            {!emailValidFormat && <small className="form-text text-danger" >Email is incorrectly formatted</small>}
          </label>
        </div>
        <div className="form-group">
          <label>
            Message
            <textarea value={message} className="form-control" required={true} onChange={handleMessageChange}></textarea>
            {!messageValid && <small className="form-text text-danger" >No message entered</small>}
          </label>
        </div>
        <button className="btn btn-primary" type="submit" onClick={updateValidation}>Submit</button>
      </form>
    </>
  );
}
