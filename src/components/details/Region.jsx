import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { regiones } from '../../utils/helpersRegions';

function Region({ pokemon, region, setRegion }) {
	const getRegion = () => {
		setRegion(`https://pokeapi.co/api/v2/pokemon-form/${pokeID}`);
	};

	useEffect(() => {
		if (pokemon) getRegion();
	}, [pokemon]);

	const pokeID =
		pokemon?.forms[0]?.url?.split('/')[
			pokemon?.forms[0]?.url?.split('/').length - 2
		];

	return <>{regiones[region?.version_group?.name]}</>;
}

export { Region };
