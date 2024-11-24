import { Link } from 'react-router-dom';
import Search from '../components/pokedex/Search';
import Filters from '../components/pokedex/Filters';
import { useFetch } from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import PokemonList from '../components/pokedex/PokemonList';
import PokemonCard from '../components/pokedex/PokemonCard';

function Pokedex() {
	const [pokemons, setPokemons] = useFetch();
	const [pokemonUrl, setPokemonUrl] = useState(null);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = () => {
		setPokemons('https://pokeapi.co/api/v2/pokemon');
	};

	const handleSearch = (value) => {
		if (!value) {
			setPokemonUrl(null);
			setPokemons(`https://pokeapi.co/api/v2/pokemon`);
		} else {
			setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}`);
		}
	};

	const handleTypeFilter = (type) => {};

	const onNext = () => {
		setPokemons(pokemons?.next);
	};
	const onPrev = () => {
		setPokemons(pokemons?.previous);
	};

	return (
		<div className="pokedex">
			<div className="pokedex__header">
				<Link to="/"> {'<='} Volver</Link>
				<div>
					<h2>Bienvenido Entrenador</h2>
					<p>Aquí podrás encontrar a tu pokemon favorito</p>
				</div>
			</div>
			<div className="form">
				<Search handleSearch={handleSearch} />
				<Filters handleTypeFilter={handleTypeFilter} />
			</div>
			<div>
				<button onClick={onPrev} disabled={!pokemons?.previous}>
					Anterior
				</button>
				<button onClick={onNext} disabled={!pokemons?.next}>
					Siguiente
				</button>
			</div>

			<div className="pokemons">
				{pokemonUrl ? (
					<PokemonCard url={pokemonUrl} />
				) : (
					<PokemonList pokemons={pokemons?.results} />
				)}
			</div>
		</div>
	);
}

export { Pokedex };
