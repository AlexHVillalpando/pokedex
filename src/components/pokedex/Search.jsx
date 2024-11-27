import { useRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

function Search({ handleSearch }) {
	const inputRef = useRef();
	const onSearch = (e) => {
		// if (e.keyCode === 13) {
		// 	handleSearch(inputRef.current.value.toLowerCase().trim());
		// }
		handleSearch(inputRef.current.value.toLowerCase().trim());
	};

	return (
		<div className="search">
			<button className="search__btn" type="submit" onClick={onSearch}>
				<BiSearchAlt />
			</button>
			<div className="search__input">
				<input type="text" placeholder="Wooper..." ref={inputRef} />
			</div>
		</div>
	);
}

export default Search;
