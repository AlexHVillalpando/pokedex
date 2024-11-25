import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { types, useNameContext } from '../contexts/nameContext';

function Home() {
	const inputRef = useRef();
	const [name, dispatch] = useNameContext();
	const navegar = useNavigate();

	const setName = () => {
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
			<div className="home__content">
				<h2 className="home__title">
					Bienvenido {name ? <>de nuevo {name}</> : 'entrenador'}
				</h2>
				<div>
					{name ? (
						<>
							<p className="home__text">
								Continuemos con tu búsqueda del tesoro Ir a tu{' '}
								<Link to="/pokedex" className="home__link">
									Pokédex
								</Link>
							</p>
							<button onClick={clearName} className="home__btn btn--radius">
								Salir
							</button>
						</>
					) : (
						<>
							<p>Para comenzar, introduce tu nombre</p>
							<input
								ref={inputRef}
								type="text"
								placeholder="Tu nombre..."
								className="home__input"
							/>
							<button onClick={setName} className="home__btn">
								Comenzar
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export { Home };
