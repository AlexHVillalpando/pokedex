import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

function Genus({ pokemon }) {
	const [genus, setGenus] = useFetch();
	const [pokegen, setPokegen] = useState([]);

	const getGenus = () => {
		setGenus(
			`https://pokeapi.co/api/v2/pokemon-species/${
				pokemon?.name.split('-')[0]
			}`,
		);
	};

	useEffect(() => {
		if (pokemon) {
			getGenus();
		}
	}, [pokemon]);

	useEffect(() => {
		let inte = [];

		for (let i = 0; i < genus?.genera?.length; i++) {
			if (genus?.genera[i]?.language?.name === 'es') {
				inte.push(genus?.genera[i]?.genus);
			} else if (genus?.genera[i]?.language?.name === 'en') {
				inte.push(genus?.genera[i]?.genus);
			}
		}
		setPokegen(inte);
	}, [genus]);

	return <>{pokegen[0]}</>;
}

export { Genus };
