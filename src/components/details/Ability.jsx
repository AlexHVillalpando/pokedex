import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

function Ability({ data }) {
	const [abilityOpen, setAbilityOpen] = useState(false);
	const [habilidad, setHabilidad] = useFetch();
	const [output, setOutput] = useState('');

	useEffect(() => {
		getHabilidad();
	}, []);

	const getHabilidad = () => {
		setHabilidad(
			`https://pokeapi.co/api/v2/ability/${
				data?.url?.split('/')[data?.url?.split('/').length - 2]
			}`,
		);
	};

	const abilityHandler = () => {
		setAbilityOpen(!abilityOpen);
		console.log();
	};

	useEffect(() => {
		let inteES = [];
		let inteEN = [];
		for (let i = 0; i < habilidad?.names?.length; i++) {
			if (habilidad?.names[i]?.language?.name === 'es') {
				inteES.push(habilidad?.names[i]?.name);
			} else if (habilidad?.names[i]?.language?.name === 'en') {
				inteEN.push(habilidad?.names[i]?.name);
			}
		}
		if (inteES.length !== 0) {
			setOutput(inteES[Math.floor(Math.random() * inteES.length)]);
		} else {
			setOutput(inteEN[Math.floor(Math.random() * inteEN.length)]);
		}
	}, [habilidad]);

	return (
		<div className="details__card-ability">
			<button onClick={abilityHandler} className="ability-btn">
				{output}
			</button>
		</div>
	);
}

export { Ability };
