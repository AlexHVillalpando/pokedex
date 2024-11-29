import axios from 'axios';
import { useState } from 'react';

function useFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const dataFetch = (url) => {
		setLoading(true);
		setError(null);
		axios
			.get(url)
			.then((res) => setData(res.data))
			.catch((err) => {
				if (err.response && err.response.status === 404) {
					setError('No se ha encontrado');
					console.log(error);
				} else {
					setError('Error al cargar los datos');
					console.log(error);
				}
			})
			.finally(() => setLoading(false));
	};
	return [data, dataFetch, loading, error];
}

export { useFetch };
