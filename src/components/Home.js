import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import CristalFoto from '../assets/img/cris.png';
import Html from '../assets/img/html.png';
import Css from '../assets/img/css.png';
import Js from '../assets/img/js.png';
import ReactImage from '../assets/img/react.png';
import NodeJs from '../assets/img/nodejs.png';
import MongoDb from '../assets/img/mongodb.png';
import Mysql from '../assets/img/mysql.png';
import Php from '../assets/img/php.png';


import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {

    render() {

        return (

            <div className="home" id="home">



                <div className="one" id="container">
                        <h1 className="title">¡HOLA!</h1>
                        <h2 className="title">SOY CRISTAL HERRERA</h2>
                </div>

                <div className="two">
                    <div className="title1" dataText="DESARROLLADOR FRONTEND">DESARROLLADOR FRONTEND</div>

                </div>

                <h2 className="title2">Sobre mi</h2>

                <div className="three">


                        <p className="paragraph">Desde el 2019 descubrí el mundo de la programación, Actualmente cuento con las habilidades para desarrollar una página Web
                            completa, me apasiona la tecnología y aprender cosas nuevas.</p>
                        <img className="image_cv" src={CristalFoto} />

                </div>
                    <h2>Capacidades Técnicas:</h2>
                    <div className="four">
                        <div className="skill">
                            <h3> HTML5 </h3>
                            <img className="image_icon" src={Html} />
                        </div>


                        <div className="skill s1">
                            <h3>CSS</h3>
                            <img className="image_icon" src={Css} />
                        </div>

                        <div className="skill s2">
                            <h3>JAVASCRIPTS</h3>
                            <img className="image_icon" src={Js} />

                        </div>

                        <div className="skill s3">
                            <h3>REACTJS</h3>
                            <img className="image_icon" id="girarIcon" src={ReactImage} />

                        </div>

                        <div className="skill s4">
                            <h3>PHP</h3>
                            <img className="image_icon" src={Php} />

                        </div>

                        <div className="skill s5">
                            <h3>MYSQL</h3>
                            <img className="image_icon" src={Mysql} />

                        </div>

                        <div className="skill s6">
                        <h3 className="title3">Aprendiendo</h3>
                        </div>
                        </div>

                        <div className="skill_plus">
                        <div className="skill s7">
                            <h3>NODEJS</h3>
                            <img className="image_icon" src={NodeJs} />
                        </div>
                        <div className="skill s8">
                            <h3>MONGODB</h3>
                            <img className="image_icon" src={MongoDb} />
                        </div>
                        </div>



                    <div className="five">
                        <nav className="menu-redes">
                            <ul className="list-redes">
                                <li>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                    <a href="https://www.linkedin.com/in/cris-herreradev/" target="_blank" className='image_iconV' > Linkedin </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <a href="https://github.com/Cristal-Herrera" target="_blank" className='image_iconV'  >Github </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a href="mailto:cristalh61@gmail.com" target="_blank" className='image_iconV' >Contactos</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
            </div>

                );
    }
}


                export default Home;