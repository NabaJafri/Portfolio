import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from "react-bootstrap"
import colorSharp from "../assets/img/color-sharp.png"
import react from "../assets/img/react.png"
import bootstrap from "../assets/img/bootstrap.png"
import c from "../assets/img/c.png"
import cplusplus from "../assets/img/c++.png"
import css from "../assets/img/css.png"
import html from "../assets/img/html.png"
import java from "../assets/img/java.png"
import javascript from "../assets/img/javascript.png"
import discord from "../assets/img/discord.png"
import express from "../assets/img/express.png"
import github from "../assets/img/github.png"
import mongodb from "../assets/img/mongodb.jpg"
import nodejs from "../assets/img/nodejs.png"
import mysql from "../assets/img/mysql.png"
import php from "../assets/img/php.png"
import postman from "../assets/img/postman.png"
import selenium from "../assets/img/selenium.png"
import tableau from "../assets/img/tableauu.jpg"
import papyrus from "../assets/img/papyrus-logo.png"

export const Skills =()=>{

        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return(
            <section className="skill" id="skills">
                <Container>
                    <Row>
                        <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>By staying up-to-date with the latest industry trends and technologies, I continuously expand my knowledge and refine my skills. I am a firm believer in the power of collaboration and adaptability, allowing me to effectively contribute to dynamic and fast-paced environments.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                    <img src={react} alt="Image"/>
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="Image"/>
                                    <h5>HTML</h5>
                            </div>
                            <div className="item">
                                    <img src={mongodb} alt="Image"/>
                                    <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                    <img src={nodejs} alt="Image"/>
                                    <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                    <img src={express} alt="Image"/>
                                    <h5>Express</h5>
                            </div>
                            <div className="item">
                                    <img src={javascript} alt="Image"/>
                                    <h5>JS</h5>
                            </div>
                            <div className="item">
                                    <img src={selenium} alt="Image"/>
                                    <h5>Selenium</h5>
                            </div>
                            <div className="item">
                                    <img src={postman} alt="Image"/>
                                    <h5>Postman</h5>
                            </div>
                            <div className="item">
                                    <img src={php} alt="Image"/>
                                    <h5>PHP</h5>
                            </div>
                            <div className="item">
                                    <img src={mysql} alt="Image"/>
                                    <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                    <img src={c} alt="Image"/>
                                    <h5>C</h5>
                            </div>
                            <div className="item">
                                    <img src={cplusplus} alt="Image"/>
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={tableau} alt="Image"/>
                                    <h5>Tableau</h5>
                            </div>
                           
                                <div className="item">
                                    <img src={papyrus} alt="Image"/>
                                    <h5>Papyrus</h5>
                                </div>
                                
                                <div className="item">
                                    <img src={bootstrap} alt="Image"/>
                                    <h5>Bootstrap</h5>
                                </div>
                                
                                <div className="item">
                                    <img src={java} alt="Image"/>
                                    <h5>Java</h5>
                                </div>
                
                            </Carousel>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <img src={colorSharp} className="background-image-left" alt="Image"/>
            </section>
        )
        }

export default Skills;