import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useNameContext } from '../contexts/nameContext';
import {
	Search,
	Filters,
	PokemonList,
	PokemonCard,
} from '../components/pokedex';
import About from '../components/home/About';

function Pokedex() {
	const [name] = useNameContext();
	const [pokemons, setPokemons, loading, error] = useFetch();
	const [pokemonUrl, setPokemonUrl] = useState(null);
	const [isFiltering, setIsFiltering] = useState(false);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = () => {
		setPokemons('https://pokeapi.co/api/v2/pokemon');
	};

	const handleSearch = (value) => {
		if (value) {
			setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}`);
		} else if (!value) {
			setIsFiltering(false);
			setPokemonUrl(null);
			setPokemons(`https://pokeapi.co/api/v2/pokemon`);
		}
	};

	const handleTypeFilter = (type) => {
		if (type) {
			setIsFiltering(true);
			setPokemons(`https://pokeapi.co/api/v2/type/${type}`);
		} else {
			setIsFiltering(false);
			setPokemons(`https://pokeapi.co/api/v2/pokemon`);
		}
	};

	const onNext = () => {
		setPokemons(pokemons?.next);
	};
	const onPrev = () => {
		setPokemons(pokemons?.previous);
	};

	const pokemonsArray = isFiltering ? pokemons?.pokemon : pokemons?.results;

	return (
		<div className="pokedex">
			<div className="pokedex__banner">
				<Link className="pokedex__banner-arrow" to="/">
					<i className="pokedex__banner-header-icon bx bx-user-circle bx-tada-hover"></i>
					<p className="pokedex__banner-header-txt">{name}</p>
				</Link>

				<div className="pokedex__form">
					<Search handleSearch={handleSearch} loading={loading} error={error} />
					<Filters handleTypeFilter={handleTypeFilter} />
				</div>
				<About />
			</div>
			{/* si agrego algo fuera del container, ocupará el 100% de ancho */}

			<div className="pokedex__container">
				<div className="nav__bar">
					<button
						className="nav__bar--btn prev"
						onClick={onPrev}
						disabled={!pokemons?.previous}
					>
						Anterior
					</button>
					<button
						className="nav__bar--btn next"
						onClick={onNext}
						disabled={!pokemons?.next}
					>
						Siguiente
					</button>
				</div>

				<div className="pokedex__cards">
					{pokemonUrl ? (
						<PokemonCard url={pokemonUrl} />
					) : (
						<PokemonList pokemons={pokemonsArray} isFiltering={isFiltering} />
					)}
				</div>
				<div className="nav__bar">
					<button
						className="nav__bar--btn prev"
						onClick={onPrev}
						disabled={!pokemons?.previous}
					>
						Anterior
					</button>
					<button
						className="nav__bar--btn next"
						onClick={onNext}
						disabled={!pokemons?.next}
					>
						Siguiente
					</button>
				</div>
			</div>
		</div>
	);
}

export { Pokedex };
