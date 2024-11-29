import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { regiones } from '../../utils/helpersRegions';

function Genus({ pokemon }) {
	const [genus, setGenus] = useFetch();

	const getGenus = () => {
		setGenus(
			`https://pokeapi.co/api/v2/pokemon-species/${
				pokemon?.name.split('-')[0]
			}`,
		);
	};

	useEffect(() => {
		if (pokemon) getGenus();
	}, [pokemon]);

	const pokeID =
		pokemon?.forms[0]?.url?.split('/')[
			pokemon?.forms[0]?.url?.split('/').length - 2
		];

	return <>{genus?.genera[5]?.genus}</>;
}

export default Genus;
