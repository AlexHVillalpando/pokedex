import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
import { tipos } from '../utils/helpers';
import { useNameContext } from '../contexts/nameContext';
import About from '../components/home/About';

function Details() {
	const [username] = useNameContext();
	const params = useParams();
	const [pokemon, setPokemon] = useFetch();

	useEffect(() => {
		if (params.name) getPokemon();
	}, [params?.name]);

	const getPokemon = () => {
		setPokemon(`https://pokeapi.co/api/v2/pokemon/${params?.name}`);
	};

	const types = pokemon?.types.map((type) => type?.type?.name);

	return (
		<div
			className="details__component"
			style={{ backgroundImage: 'url(/home_background.png)' }}
		>
			<div className="pokedex__banner">
				<Link className="pokedex__banner-arrow" to="/pokedex">
					<i className="pokedex__banner-header-icon bx bxs-left-arrow-circle bx-tada-hover"></i>
					<p className="pokedex__banner-header-txt">Atrás</p>
				</Link>

				<About />
			</div>

			<div className="details__container">
				<div className="details__card">
					<div className="details__card-image">
						<img
							src={pokemon?.sprites?.other?.showdown?.front_default}
							alt={pokemon?.name}
						/>
					</div>
					<div className="details__card-content">
						<span>
							<div># {pokemon?.id?.toString().padStart(3, '0')}</div>
						</span>
						<h2>{pokemon?.name}</h2>

						<div>
							<span>
								<span>Peso</span>
								{`${parseInt(pokemon?.weight) / 10} kg`}
							</span>

							<span>
								<span>Altura</span>
								{`${parseInt(pokemon?.height) / 10} m`}
							</span>

							<div>
								<div>
									<h3>Tipo</h3>
									<div>
										{types?.map((type) => (
											<span key={type}>{tipos[type]}</span>
										))}
									</div>
								</div>

								<div>
									<h3>Habilidades</h3>
									<div className="details__card-abilities">
										{pokemon?.abilities?.map((data) => (
											<span
												className="details__card-ability"
												key={data?.ability?.name}
											>
												{data?.ability?.name}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Details };
