import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const tipos = {
	normal: 'normal',

	fighting: 'luchador',

	flying: 'volador',

	poison: 'veneno',

	ground: 'tierra',

	rock: 'roca',

	bug: 'bicho',

	ghost: 'fantasma',

	steel: 'acero',

	fire: 'fuego',

	water: 'agua',

	grass: 'planta',

	electric: 'eléctrico',

	psychic: 'psíquico',

	ice: 'hielo',

	dragon: 'dragón',

	dark: 'siniestro',

	fairy: 'hada',

	stellar: 'estelar',

	unknown: 'desconocido',

	shadow: 'sombra',
};

function PokemonCard({ url }) {
	const [pokemon, setPokemon] = useFetch();

	useEffect(() => {
		if (url) getPokemon();
	}, [url]);

	const getPokemon = () => {
		setPokemon(url);
	};

	const types = pokemon?.types.map((type) => type.type.name);

	return (
		<Link to={`/pokedex/${pokemon?.name}`}>
			<div className={`pokemons__card type--${types[0]}`}>
				<img
					src={pokemon?.sprites?.other?.showdown?.front_default}
					alt={pokemon?.name}
				/>
				<div>
					<h2>{pokemon?.name}</h2>
					<span>
						{types.map((type, index) => (
							<span key={index + 1}>{type}</span>
						))}
					</span>
				</div>
			</div>
		</Link>
	);
}

export default PokemonCard;
