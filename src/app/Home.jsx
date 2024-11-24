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
			<h2>Bienvenido {name ? <>de nuevo {name}</> : 'entrenador'}</h2>

			<div>
				{name ? (
					<>
						<p>Continuemos con tu búsqueda del tesoro</p>
						<p>
							Ir a tu <Link to="/pokedex">pokedex</Link>
							<button onClick={clearName}>Salir</button>
						</p>
					</>
				) : (
					<>
						<p>Para comenzar, introduce tu nombre</p>
						<input ref={inputRef} type="text" placeholder="Tu nombre..." />
						<button onClick={setName}>Comenzar</button>
					</>
				)}
			</div>
		</div>
	);
}

export { Home };
