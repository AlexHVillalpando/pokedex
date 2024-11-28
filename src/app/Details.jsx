import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect, useState } from 'react';
import { tipos } from '../utils/helpers';
import { useNameContext } from '../contexts/nameContext';
import About from '../components/home/About';

import { FaWeightHanging } from 'react-icons/fa';
import { TfiRulerAlt2 } from 'react-icons/tfi';

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

	// const getRegion = `https://pokeapi.co/api/v2/pokemon-form/${
	// 	params?.forms[0]?.url?.split('/')[6]
	// }`;

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
							<div className="details__card-header-num"># {pokenum}</div>
							<div className="details__card-header-name">
								{pokemon?.species?.name}
							</div>
						</div>
						<div className="details__card-region">region</div>
						<div className="details__card-header-type">
							<div>
								{types?.map((type) => (
									<span key={type}>{tipos[type]}</span>
								))}
							</div>
						</div>
					</div>

					<div className="details__card-content">
						<div className="details__card-image">
							<img
								src={pokemon?.sprites?.other?.showdown?.front_default}
								alt={pokemon?.name}
							/>
						</div>

						<div className="details__card-leftbar">
							<div className="details__card-leftbar-weight">
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
				</div>
			</div>
		</div>
	);
}

export { Details };
