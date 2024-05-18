import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
const form = useRef();
const letterClass = 'text-animate';
  
  useEffect(() => {
    const timeout = setTimeout(() => {
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(() => {
        alert('Message successfully sent!');
        window.location.reload(false);
      })
      .catch(() => {
        alert('Failed to send the message, please try again');
      });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
        <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', ' c', 't', '', 'M','e']}
                  idx={80}
                />
              </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Jennifer Arellano,
          <br />
         USA,
          <br />
          Garden Grove, <br />
          Orange County <br />
          <br />
          <span>arellanojennifer8@gmail.com</span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
