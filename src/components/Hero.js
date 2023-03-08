import { BrowserRouter } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Illustration from "../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";


const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }
    h3{
      color:var(--green);
      margin: 1rem 0;
    }
    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }
  .hero-image{
    img{
      max-width: 500px;
    }
  }
  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{
      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }
  @media(max-width: 600px){
    margin-top: 25%;
  }
  @media(max-width: 480px){
    margin-top: 35%;
  }
`
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <p>Hi 👋, I'm</p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.2*1000}>
          <h1>Vijayakumar</h1>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">I'm a Full stack developer with a focus on web development with JavaScript.</p>
        </AnimationOnScroll>

          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
            </BrowserRouter>
          </AnimationOnScroll>
      </div>
      <div className="hero-image">
        <AnimationOnScroll animateIn="animate__fadeInRight" delay={1*1000}>
        <img src={Illustration} alt="Illustration"/>
        </AnimationOnScroll>
      </div>
    </Container>
  )
}