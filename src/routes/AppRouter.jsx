import { Routes, Route } from 'react-router-dom';
import { Home, Pokedex, Details } from '../app';

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/pokedex" element={<Pokedex />}>
				<Route path=":id" element={<Details />} />
			</Route>
		</Routes>
	);
}

export default AppRouter;
