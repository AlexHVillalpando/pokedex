import { useParams, Link } from 'react-router-dom';

function Details() {
	const params = useParams();
	return (
		<div>
			<Link to="/pokedex"> {'<='} Volver</Link>
			<h2>Detalles de {params.name}</h2>
		</div>
	);
}

export { Details };
