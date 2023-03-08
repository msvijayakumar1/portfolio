import reactIcon from "../assets/react-icon.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import styled from "styled-components";


const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    font-size: 2.8rem;
  }
  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }
  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`

export function Footer(){
  return(
    <Container className="footer">
      <a href="/" className="logo">
        <span>Vijaya</span>
        <span>Kumar</span>
      </a>
      <div>
        <p>This site was made with <img src={reactIcon}/> and a lot of <span>❤️</span></p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/vijayakumar5678/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/msvijayakumar1" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

       
      </div>
      
    </Container>
  )
}