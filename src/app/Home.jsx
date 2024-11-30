import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { types, useNameContext } from '../contexts/nameContext';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function Home() {
	const inputRef = useRef();
	const [name, dispatch] = useNameContext();
	const navegar = useNavigate();

	const setName = (e) => {
		e.preventDefault();
		dispatch({
			type: types.SET_NAME,
			payload: inputRef.current.value.trim(),
		});
		inputRef.current.value = '';
		window.setTimeout(() => {
			navegar('/pokedex');
		}, 1000);
	};

	const clearName = () => {
		dispatch({
			type: types.CLEAR_NAME,
		});
	};

	return (
		<div className="home">
			<div className="home__banner"></div>
			<div className="home__card">
				<div className="home__card-title">
					<span>
						<i className="bx bx-library"></i>
					</span>
					Pokédex
					<span>
						<i className="bx bx-sun"></i>
					</span>
				</div>
				<h2 className="home__title">
					¡Bienvenido {name ? <>de nuevo {name}!</> : 'entrenador!'}
				</h2>
				<div>
					{name ? (
						<>
							<div className="home__welcome-btns">
								<button onClick={clearName} className="home__btn btn--radius">
									<span className="home__btn_content">
										<FaArrowAltCircleLeft />
									</span>
									<span className="home__btn_content">Salir</span>
								</button>
								<Link to="/pokedex" className="home__link">
									<button className="home__btn btn--radius">
										<span className="home__btn_content">Ir a mi Pokédex </span>
										<span className="home__btn_content">
											<FaArrowAltCircleRight />
										</span>
									</button>
								</Link>
							</div>
						</>
					) : (
						<>
							<p>Para comenzar, introduce tu nombre</p>
							<div className="home__inputs">
								<form onSubmit={setName}>
									<input
										ref={inputRef}
										type="text"
										placeholder="Tu nombre..."
										className="home__input"
										name="input_home"
									/>
									<button onClick={setName} className="home__btn" type="button">
										Comenzar
									</button>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export { Home };
