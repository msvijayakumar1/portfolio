import cssIcon from "../assets/css-icon.svg";
import htmlIcon from "../assets/html-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.png";
import postmanIcon from "../assets/postman-icon.png";
import mongodbIcon from "../assets/mongodb-icon.png";
import profile from "../assets/Vijayakumar M.jpg"
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 3.4rem;
    }
  }
  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }
  h3{
    margin-top: 2rem;
    color: var(--green);
  }
  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  
  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 80%;
     filter: grayscale(1);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }
  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }
  @media (max-width: 960px){
    display: block;
    text-align: center;
    .about-image{
      display: flex;
    }
    .hard-skills{
      justify-content: center;
    }
    
  }
`

export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <h2>About me</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft" delay={0.2 * 1000}>
          <p>My name is Vijayakumar, I am a Full stack developer with a great passion for programming. I am passionate about delivering solutions that add value to people's lives and at the same time challenge me. Improved my skills as a Front-End and Back-End developer</p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that provide me. I'm always improving myself with each project they put in my hands.</p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft" delay={0.6 * 1000}>

          <p>I am a dedicated person who pursues to make his dreams come true, hardworking and results oriented, I always seek to achieve my best version.</p>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </AnimationOnScroll>
        <div className="hard-skills">

          <div className="hability">
            <AnimationOnScroll animateIn="animate__flip" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.2 * 1000}>
            <img src={mongodbIcon} alt="Mongodb" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </AnimationOnScroll>
          </div>
          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </AnimationOnScroll>
          </div>

          <div className="hability">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={0.7 * 1000}>
            <img src={postmanIcon} alt="Postman" />
          </AnimationOnScroll>
          </div>


        </div>
      </div>
      <div className="about-image">
        <AnimationOnScroll animateIn="animate__fadeInRight" delay={0.6 * 1000}>
          <img src={profile} alt="profile picture" />
        </AnimationOnScroll>
      </div>
    </Container>
  )
}