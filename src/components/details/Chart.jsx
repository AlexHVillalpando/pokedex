import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	Tooltip,
	Legend,
	RadialLinearScale,
	Filler,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

ChartJS.register(
	LineElement,
	PointElement,
	Tooltip,
	Legend,
	RadialLinearScale,
	Filler,
);

function Chart({stats}) {
	const data = {
		labels: ['HP', 'Attack', 'Defense', 'Speed', 'Sp. Def', 'Sp. Atk'],
		datasets: [
			{
				label: 'Stats',
				data: [stats[0], stats[1], stats[2], stats[3], stats[4], stats[5]],
				backgroundColor: '#87c5fecc',
				borderColor: '#87c5fecc',
			},
			{ fill: 'origin' },
		],
	};

	const options = {
		elements: { line: { borderWidth: 1 }, point: { pointStyle: false } },
		scales: {
			r: {
				angleLines: { color: 'gray' },
				grid: { display: false },
				ticks: { display: false },
				pointLabels: { color: '#efcb3b' },
				suggestedMin: 0,
				//suggestedMax: 420,
			},
		},
		plugins: { filler: { propagate: true }, legend: { display: false } },
	};

	return (
		<div className="chart">
			<Radar data={data} options={options}></Radar>
		</div>
	);
}

export { Chart };
