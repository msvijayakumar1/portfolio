import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";


const Container = styled.div`
  margin-top: 10rem;
  display: grid;
  place-items: center;
  h2{
    text-align: center;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input, textarea{
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background:none;
      border: 1px solid #FFF;
      color: white;
      font-weight: 600;
      &::placeholder{
        color: #FFF;
      }
    }
    textarea{
      height: 20rem;
      overflow-y: auto;
    }
    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  
  }
  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`
export function Form(){

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9szejs', 'template_rzgsvsc', form.current, 'adVNewC1-YMu5TORn')
      .then((result) => {
          console.log(result.text);
        const div =result
         div.textContent = "Message sent successfully :)";
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
 
  return(
    <Container>    
      <h2>Get in touch using the form below</h2>

      <form ref={form} onSubmit={sendEmail}>
      <input 
      placeholder='Email'
      type="email" 
      name="user_email"/>
      <textarea 
      placeholder='Leave your Message'
      name="message" />
      <button type="submit" onClick={sendEmail}>
          Send Message
        </button>
    </form>  
    </Container>
  );
};