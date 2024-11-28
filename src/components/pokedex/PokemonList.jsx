import { PokemonCard } from './PokemonCard';

function PokemonList({ pokemons, isFiltering, loading, error }) {
	return (
		<>
			{pokemons?.map((pokemon) => {
				const pokemonUrl = isFiltering ? pokemon.pokemon.url : pokemon.url;
				const pokemonName = isFiltering ? pokemon.pokemon.name : pokemon.name;
				return (
					<PokemonCard
						key={pokemonName}
						url={pokemonUrl}
						loading={loading}
						error={error}
					/>
				);
			})}
		</>
	);
}

export { PokemonList };
