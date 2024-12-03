import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	Tooltip,
	Legend,
	RadialLinearScale,
	Filler,
	Title,
} from 'chart.js';
import { useEffect, useState } from 'react';

import { Radar } from 'react-chartjs-2';

ChartJS.register(
	LineElement,
	PointElement,
	Tooltip,
	Legend,
	RadialLinearScale,
	Filler,
	Title,
);

const initialData = {
	labels: ['PS', 'Ataque', 'Defensa', 'Velocidad', 'Def. Esp.', 'Ar. Esp.'],
	datasets: [
		{
			label: 'Stats',
			data: [0, 0, 0, 0, 0, 0],
			backgroundColor: '#87c5fecc',
			borderColor: '#87c5fecc',
		},
	],
};

function Chart({ stats }) {
	const [data, setData] = useState(initialData);

	useEffect(() => {
		if (stats) {
			setData({
				labels: [
					`PS${stats[0]?.base_stat}`,
					`Ataque${stats[1]?.base_stat}`,
					`Defensa${stats[2]?.base_stat}`,
					`Velocidad${stats[5]?.base_stat}`,
					`Def. Esp.${stats[4]?.base_stat}`,
					`Ar. Esp.${stats[3]?.base_stat}`,
				],
				datasets: [
					{
						label: '',
						data: [
							stats[0]?.base_stat,
							stats[1]?.base_stat,
							stats[2]?.base_stat,
							stats[5]?.base_stat,
							stats[4]?.base_stat,
							stats[3]?.base_stat,
						],
						backgroundColor: '#87c5fecc',
						borderColor: '#87c5fecc',
					},
					{ fill: 'origin' },
				],
			});
		}
	}, [stats]);

	const options = {
		elements: { line: { borderWidth: 1 }, point: { pointStyle: false } },
		scales: {
			r: {
				angleLines: { color: 'gray', lineWidth: 2 },
				grid: { display: false },
				ticks: { display: false },
				pointLabels: {
					color: '#efcb3b',
					font: { size: 10.5 },
				},
				suggestedMin: 0,
			},
		},
		plugins: {
			filler: { propagate: true },
			legend: { display: false },
			title: { display: true, text: 'Características', color: 'white' },
		},
	};

	return (
		<div className="chart">
			<Radar data={data} options={options}></Radar>
		</div>
	);
}

export { Chart };
