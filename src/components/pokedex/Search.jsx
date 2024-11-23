import { useRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

function Search({ handleSearch }) {
	const inputRef = useRef();
	const onSearch = () => {
		handleSearch(inputRef.current.value.toLowerCase().trim());
	};

	return (
		<div className="search">
			<div className="search__input">
				<BiSearchAlt />
				<input type="text" placeholder="Wooper..." ref={inputRef} />
			</div>
			<button onClick={onSearch}>Buscar</button>
		</div>
	);
}

export default Search;
