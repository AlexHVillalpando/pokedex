import { useReducer, createContext, useContext } from 'react';

const nameContext = createContext();

export const types = {
	SET_NAME: 'SET_NAME',
	CLEAR_NAME: 'CLEAR_NAME',
};

const initialName = window.localStorage.getItem('name') || null;
const nameReducer = (state, action) => {
	switch (action.type) {
		case types.SET_NAME:
			window.localStorage.setItem('name', action.payload);
			return action.payload;
		case types.CLEAR_NAME:
			window.localStorage.removeItem('name');
			return null;
		default:
			return state;
	}
};

const NameProvider = ({ children }) => {
	const [state, dispatch] = useReducer(nameReducer, initialName);

	return (
		<nameContext.Provider value={[state, dispatch]}>
			{children}
		</nameContext.Provider>
	);
};

const useNameContext = () => useContext(nameContext);

export { NameProvider, useNameContext };

export default nameContext;
