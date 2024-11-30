import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { regiones } from '../../utils/helpersRegions';

function Entry({ pokemon }) {
	const [entries, setEntries] = useFetch();
	const [entry, setEntry] = useState('');

	const getEntries = () => {
		setEntries(
			`https://pokeapi.co/api/v2/pokemon-species/${
				pokemon?.name.split('-')[0]
			}`,
		);
	};

	useEffect(() => {
		if (pokemon) {
			getEntries();
		}
	}, [pokemon]);

	useEffect(() => {
		if (entries?.flavor_text_entries[0]?.language?.name === 'en') {
			setEntry(entries.flavor_text_entries[0]?.flavor_text.replaceAll('', ' '));
		}
	}, [entries]);

	return <>{entry}</>;
}

export { Entry };
