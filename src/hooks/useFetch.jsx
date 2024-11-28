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
			.catch((err) => {
				setError('No se encuentra este pokemon');
			})
			.finally(() => setLoading(false));
	};
	return [data, dataFetch, loading, error];
}

export { useFetch };
