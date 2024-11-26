import { useState } from 'react';

import axios from 'axios';

function useFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const dataFetch = (url) => {
		setLoading(true);
		axios
			.get(url)
			.then((res) => setData(res.data))
			.catch(() => setError('No se han obtenido resultados para tu búsqueda.'))
			.finally(() => setLoading(false));
	};
	return [data, dataFetch, loading, error];
}

export { useFetch };
