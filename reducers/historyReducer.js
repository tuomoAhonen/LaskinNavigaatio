import {useReducer, createContext, useContext} from 'react';

const historyReducer = (state, action) => {
	if (!action && !action.payload) return state;
	const result = action.payload.result;
	const input1 = action.payload.input1;
	const input2 = action.payload.input2;
	switch (result.invokedBy) {
		case 'plus':
			return [...state, `${input1} + ${input2} = ${result.total}`];
		case 'minus':
			return [...state, `${input1} - ${input2} = ${result.total}`];
		default:
			return state;
	}
};

const HistoryContext = createContext();

export const HistoryContextProvider = (props) => {
	const [value, dispatch] = useReducer(historyReducer, []);
	return <HistoryContext.Provider value={[value, dispatch]}>{props.children}</HistoryContext.Provider>;
};

export const useHistoryValue = () => {
	const context = useContext(HistoryContext);
	return context[0];
};

export const useHistoryDispatch = () => {
	const context = useContext(HistoryContext);
	return context[1];
};

export default HistoryContext;
