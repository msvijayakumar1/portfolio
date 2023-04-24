import githubIcon from "../assets/github-icon.svg"
import externalLinkIcon from "../assets/external-icon.svg"
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

const Container = styled.section`
  margin-top: 15rem;
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }
      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }
      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }
      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }
  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

      <AnimationOnScroll animateIn="animate__flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/msvijayakumar1/E-commerce" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a> 
            <a href="https://e-commerce-121.netlify.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
          </div>
          </header>
          <div className="body">
            <h3>E Commerce</h3>
            <p> A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>Mongodb</li>
            </ul>
          </footer>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/msvijayakumar1/AWS-polymersearch-frondend" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://aws-polymersearchclone.netlify.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>AWS-polymersearchclone</h3>
              <p>This app used to search AWS polymer 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>Mongodb</li>
              </ul>
            </footer>
          </div>
        </AnimationOnScroll>


        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/msvijayakumar1/Chatapp-Fe" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://chatapp-121.netlify.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Chat App</h3>
              <p>This app is an chat app allows the user to login and chat
with other user who were loggedin.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>Mongodb</li>
                <li>Cloudinary</li>
              </ul>
            </footer>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
            <a href="https://github.com/msvijayakumar1/Blogapp" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://blogapp-121.netlify.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Blog App</h3>
              <p>A blog application is a software program that provides an online environment and features for a blogger.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>React</li>
                <li>Express</li>
                <li>Mongodb</li>
              </ul>
            </footer>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/msvijayakumar1/pizza-delivery-app-Frontend" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://pizza-delivery-app-121.netlify.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Pizza Delivery App</h3>
              <p>Access to different categories of pizza. This application is providing access to the customers over different categories of pizza.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node</li>
                <li>Mongodb</li>
              </ul>
            </footer>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
            <a href="https://github.com/msvijayakumar1/nationalize-web-code" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a href="https://nationalize-121.netlify.app" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Nationalize API</h3>
              <p>This Nationalize.io predicts the nationality of a person given their name.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </AnimationOnScroll>

      



      </div>
    </Container>
  );
}