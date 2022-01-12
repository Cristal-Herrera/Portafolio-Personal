import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';



class Proyecto extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.proyecto, this.props.indice);
    }

    render() {
        const { titulo, image } = this.props.proyecto;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>
                <div className="content-item">
                    <h2>{titulo}</h2>
                    <p id="brand ">Página de servicio de limpieza de tapizados, realizada en HTML, CSS, JAVASCRIPT, MYSQL y PHP</p>

                    <div id="menu-redes">
                        <ul>
                            <li className="icon_redes">
                                <FontAwesomeIcon icon={faTv} className="icon_redesIcon" />
                                <a href='https://dtapizados.000webhostapp.com/' target="_blank" className="icon_redes1"> Proyecto </a>
                            </li>

                            <li className="icon_redes">
                                <FontAwesomeIcon icon={faGithub} className="icon_redesIcon"  />
                                <a href="https://github.com/Cristal-Herrera/Dtapizados" target="_blank" className="icon_redes1">Github </a>

                            </li>

                        </ul>
                    </div>
                </div>



                {/* <div id="menu-redes">
                            <ul>
                                <li className="icon_redes">
                                <FontAwesomeIcon icon={faTv} />
                                <a href= 'https://dtapizados.000webhostapp.com/' target="_blank" className="icon_redes1"> Proyecto </a>

                                </li>
                                <li className="icon_redes">
                                <FontAwesomeIcon icon={faGithub}/>
                                <a href="https://github.com/Cristal-Herrera/Dtapizados" target="_blank" className="icon_redes1">Github </a>

                                </li>

                            </ul>
                        </div> */}

                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Proyecto;