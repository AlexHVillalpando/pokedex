import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {
	return (
		<>
			{pokemons?.map((pokemon) => {
				const pokemonDivider = pokemon?.url.split('/');
				const id = pokemonDivider[pokemonDivider.length - 2];
				return <PokemonCard key={id} url={pokemon.url} />;
			})}
		</>
	);
}

export default PokemonList;
