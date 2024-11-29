import { useRef } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

function Search({ handleSearch, loading, error }) {
	const inputRef = useRef();

	const onSearch = (e) => {
		e.preventDefault();
		handleSearch(inputRef.current.value.toLowerCase().trim());
		console.log(error);
	};

	return (
		<div className="search__container">
			<form onSubmit={onSearch} className="search">
				<button className="search__btn" type="submit" onClick={onSearch}>
					<BiSearchAlt />
				</button>
				<div className="search__input">
					<input
						ref={inputRef}
						type="text"
						className="search__input-box"
						placeholder="Wooper..."
					/>
				</div>
			</form>
		</div>
	);
}

export { Search };
