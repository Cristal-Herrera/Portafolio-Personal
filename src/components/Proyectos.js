import React, { Component } from 'react';
import Proyecto from './Proyecto';

class Proyectos extends Component {

	state = {
		proyectos: [
			{ titulo: 'DTapizados', image: require('../assets/img/dtapizados.png')}],
	};



	render() {

		return (
			<React.Fragment>
				<div id="content" className="Postres">
					<h2 className="subheder"> Lista de Proyectos</h2>

					{/* Crear componente proyectos */}

					<div id="articles" className='proyectos'>
						{
							this.state.proyectos.map((proyecto, i) => {
								return (

									<Proyecto
										key={i}
										proyecto={proyecto}
										indice={i}

									/>

								)
							})
						}
					</div>

				</div>
			</React.Fragment>

		);
	}
}

export default Proyectos;
