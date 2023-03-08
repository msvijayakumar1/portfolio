 import React, { useState } from "react";
import { send } from "emailjs-com";
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

    const [senderEmail, setSenderEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const sendMail = (e) => {
      e.preventDefault();
      send(
        "service_j9szejs",
        "template_rzgsvsc",
        { senderEmail, message },
        "adVNewC1-YMu5TORn"
      )
        .then((response) => {
          const div = document.getElementById("sent");
          div.textContent = "Message sent successfully :)";
          setSenderEmail("");
          setMessage("");
        })
        .catch((err) => {
          const div = document.getElementById("error");
          div.textContent = "OOPS! Unknown error occured. Try again later :(";
        });
    };
  
  return(
    <Container>
      <h2>Get in touch using the form below</h2>
      <form onSubmit={sendMail}>
        <input
          placeholder="Email"
          id="email"
          type="email" 
          name="sender_email"
          value={senderEmail}
          onChange={(e) => {
            setSenderEmail(e.target.value);
          }}
          required
        />
        
        <textarea
          placeholder="Leave your message"
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
       
        <button type="submit" onClick={sendMail}>
          Send Message
        </button>
    </form>
    </Container>
  )
}