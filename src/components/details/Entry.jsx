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
		let inteES = [];
		let inteEN = [];
		for (let i = 0; i < entries?.flavor_text_entries?.length; i++) {
			if (entries?.flavor_text_entries[i]?.language?.name === 'es') {
				inteES.push(entries?.flavor_text_entries[i]?.flavor_text);
			} else if (entries?.flavor_text_entries[i]?.language?.name === 'en') {
				inteEN.push(entries?.flavor_text_entries[i]?.flavor_text);
			}
		}
		if (inteES.length !== 0) {
			setEntry(
				inteES[Math.floor(Math.random() * inteES.length)]?.replaceAll('', ' '),
			);
		} else {
			setEntry(
				inteEN[Math.floor(Math.random() * inteEN.length)]?.replaceAll('', ' '),
			);
		}
	}, [entries]);

	return <>{entry}</>;
}

export { Entry };
