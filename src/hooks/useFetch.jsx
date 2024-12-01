import axios from 'axios';
import { useState } from 'react';

function useFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const dataFetch = (url) => {
		setLoading(true);
		setError(false);
		axios
			.get(url)
			.then((res) => setData(res.data))
			.catch((err) => {
				if (err.response && err.response.status === 404) {
					setError(true);
					console.log(error);
				} else {
					setError(true);
					console.log(error);
				}
			})
			.finally(() => setLoading(false));
	};
	return [data, dataFetch, loading, error];
}

export { useFetch };
