import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import { tipos } from '../utils/helpersTypes';
import { useNameContext } from '../contexts/nameContext';
import About from '../components/home/About';

import { FaWeightHanging } from 'react-icons/fa';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import Region from '../components/details/Region';
import FullName from '../components/details/FullName';
import Entry from '../components/details/Entry';
import Genus from '../components/details/Genus';
import { HiMiniSparkles } from 'react-icons/hi2';

function Details() {
	const [username] = useNameContext();
	const params = useParams();
	const [pokemon, setPokemon] = useFetch();
	const [isShiny, setIsShiny] = useState(false);
	console.log(isShiny);
	useEffect(() => {
		if (params.name) getPokemon();
	}, [params?.name]);

	const getPokemon = () => {
		setPokemon(`https://pokeapi.co/api/v2/pokemon/${params?.name}`);
	};

	const handleShiny = () => {
		setIsShiny(!isShiny);
		console.log(isShiny);
	};

	const types = pokemon?.types?.map((type) => type?.type?.name);

	const pokenum = pokemon?.species?.url
		?.split('/')
		[pokemon?.species?.url?.split('/').length - 2].padStart(3, '0');

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
					<div className="details__card-header">
						<div className="details__card-header-pokeid">
							<div className="details__card-header-num">N° {pokenum}</div>
							<div className="details__card-header-name">
								<FullName pokemon={pokemon} />
							</div>
						</div>
						<div className="details__card--header-region">
							<Region pokemon={pokemon} />
						</div>
						<div className="details__card-header-type">
							<div>
								{types?.map((type) => (
									<span key={type}>{tipos[type]}</span>
								))}
							</div>
						</div>
					</div>

					<div className="details__card-content">
						<div className="details__card-content-top">
							<div className="details__card-leftbar">
								<div className="details__card-image">
									<div className="details__card-image-shiny">
										<button
											className="details__card-image-shiny-btn"
											onClick={handleShiny}
										>
											<HiMiniSparkles />
										</button>
									</div>
									<div className="details__card-image-sprite">
										{isShiny ? (
											<>
												{pokemon?.sprites?.other?.showdown?.front_shiny ? (
													<img
														src={pokemon?.sprites?.other?.showdown?.front_shiny}
														alt={pokemon?.name}
													/>
												) : (
													<img
														src={pokemon?.sprites?.other?.home?.front_shiny}
														alt={pokemon?.name}
													/>
												)}
											</>
										) : (
											<>
												{pokemon?.sprites?.other?.showdown?.front_default ? (
													<img
														src={
															pokemon?.sprites?.other?.showdown?.front_default
														}
														alt={pokemon?.name}
													/>
												) : (
													<img
														src={pokemon?.sprites?.other?.home?.front_default}
														alt={pokemon?.name}
													/>
												)}
											</>
										)}
									</div>
								</div>
							</div>
							<div className="details__card-rightbar">
								<div className="details__card-rightbar-weight">
									<div className="physics">
										<div className="physics-weight">
											<div className="physics-icon">
												<FaWeightHanging />
											</div>
											<div className="physics-quantity">
												{`${parseInt(pokemon?.weight) / 10} kg`}
											</div>
										</div>
										<div className="physics-height">
											<div className="physics-icon">
												<TfiRulerAlt2 />
											</div>
											<div className="physics-quantity">
												{`${parseInt(pokemon?.height) / 10} m`}
											</div>
										</div>
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
						<div className="details__card-footer">
							<div className="details__card-footer-genus">
								<Genus pokemon={pokemon} />
							</div>
							<div className="details__card-footer-entries">
								<Entry pokemon={pokemon} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Details };
