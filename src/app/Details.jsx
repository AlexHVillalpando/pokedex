import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import About from '../components/home/About';

import { FaWeightHanging } from 'react-icons/fa';
import { TfiRulerAlt2 } from 'react-icons/tfi';
import { Entry, FullName, Genus, Region } from '../components/details/index.js';
import { HiMiniSparkles } from 'react-icons/hi2';
import { CgGenderMale } from 'react-icons/cg';
import { CgGenderFemale } from 'react-icons/cg';

import { regiones } from '../utils/helpersRegions.js';
import { tipos } from '../utils/helpersTypes';

import {
	kanto,
	johto,
	hoenn,
	sinnoh,
	teselia,
	kalos,
	alola,
	galar,
	hisui,
	paldea,
	noroteo,
} from '../assets/img/backgrounds/index.js';

function Details() {
	const params = useParams();
	const [pokemon, setPokemon] = useFetch();
	const [region, setRegion] = useFetch();
	const [isShiny, setIsShiny] = useState(false);
	const [isFemale, setIsFemale] = useState(false);

	useEffect(() => {
		if (params.name) {
			getPokemon();
		}
	}, [params?.name]);

	const getPokemon = () => {
		setPokemon(`https://pokeapi.co/api/v2/pokemon/${params?.name}`);
	};

	const handleShiny = () => {
		setIsShiny(!isShiny);
	};

	const handleSex = () => {
		setIsFemale(!isFemale);
	};

	const types = pokemon?.types?.map((type) => type?.type?.name);

	const pokenum = pokemon?.species?.url
		?.split('/')
		[pokemon?.species?.url?.split('/').length - 2].padStart(3, '0');

	const backgrounds = {
		kanto: kanto,
		johto: johto,
		hoenn: hoenn,
		sinnoh: sinnoh,
		teselia: teselia,
		kalos: kalos,
		alola: alola,
		galar: galar,
		hisui: hisui,
		paldea: paldea,
		noroteo: noroteo,
	};

	return (
		<div
			className="details__component"
			style={{
				backgroundImage: `url(
			${backgrounds[regiones[region?.version_group?.name]]}
			 	)`,
			}}
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
							<Region pokemon={pokemon} region={region} setRegion={setRegion} />
						</div>
						<div className="details__card-header-type">
							<div>
								{types?.map((type) => (
									<span className="details__card--header-types" key={type}>
										{tipos[type]}
									</span>
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

									<div className="details__card-image-sex">
										{pokemon?.sprites?.back_female ? (
											<>
												<button
													className="details__card-image-sex-btn"
													onClick={handleSex}
												>
													{isFemale ? (
														<CgGenderFemale size={18} />
													) : (
														<CgGenderMale size={18} />
													)}
												</button>
											</>
										) : (
											<></>
										)}
									</div>

									<div className="details__card-image-sprite">
										{isFemale ? (
											isShiny ? (
												<>
													{pokemon?.sprites?.other?.showdown
														?.front_shiny_female ? (
														<img
															src={
																pokemon?.sprites?.other?.showdown
																	?.front_shiny_female
															}
															alt={pokemon?.name}
														/>
													) : (
														<img
															src={
																pokemon?.sprites?.other?.home
																	?.front_shiny_female
															}
															alt={pokemon?.name}
														/>
													)}
												</>
											) : (
												<>
													{pokemon?.sprites?.other?.showdown?.front_female ? (
														<img
															src={
																pokemon?.sprites?.other?.showdown?.front_female
															}
															alt={pokemon?.name}
														/>
													) : (
														<img
															src={pokemon?.sprites?.other?.home?.front_female}
															alt={pokemon?.name}
														/>
													)}
												</>
											)
										) : isShiny ? (
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
