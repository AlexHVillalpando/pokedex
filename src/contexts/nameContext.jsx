import { useReducer, createContext } from 'react';

const nameContext = createContext();

const types = {
	SET_NAME: 'SET_NAME',
	CLEAR_NAME: 'CLEAR_NAME',
};

const initialName = null;

const nameReducer = (state, action) => {
	switch (action.type) {
		case types.SET_NAME:
			return action.payload;
		case types.CLEAR_NAME:
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

export { NameProvider };

export default nameContext;
