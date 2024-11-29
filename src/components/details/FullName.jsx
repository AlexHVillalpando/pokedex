import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { regiones } from '../../utils/helpersRegions';

function Region({ pokemon }) {
	const [fullName, setFullName] = useFetch();

	const getFullName = () => {
		setFullName(`https://pokeapi.co/api/v2/pokemon-form/${pokeID}`);
	};

	useEffect(() => {
		if (pokemon) getFullName();
	}, [pokemon]);

	const pokeID =
		pokemon?.forms[0]?.url?.split('/')[
			pokemon?.forms[0]?.url?.split('/').length - 2
		];

	return <>{fullName?.name}</>;
}

export default Region;
