import { Fragment, useEffect } from 'react';
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

	if (!types) return;

	return (
		<Link to={`/pokedex/${pokemon?.name}`}>
			<div className={`pokemons__card type--$}`}>
				<img
					src={pokemon?.sprites?.other?.showdown?.front_default}
					alt={pokemon?.name}
				/>
				<div>
					<h2>{pokemon?.name}</h2>
					<span>
						{types?.map((type, index) => {
							return (
								<Fragment key={type}>
									{index > 0 ? (
										<>
											{' / '}
											<span>{tipos[type]}</span>
										</>
									) : (
										<span>{tipos[type]}</span>
									)}
								</Fragment>
							);
						})}
					</span>
					<p>Tipo</p>
				</div>
				<div>
					<div>
						<span>HP</span>
						<span>{pokemon?.stats[0]?.base_stat}</span>
					</div>
					<div>
						<span>Ataque</span>
						<span>{pokemon?.stats[1]?.base_stat}</span>
					</div>
					<div>
						<span>Defensa</span>
						<span>{pokemon?.stats[2]?.base_stat}</span>
					</div>
					<div>
						<span>Velocidad</span>
						<span>{pokemon?.stats[5]?.base_stat}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default PokemonCard;
