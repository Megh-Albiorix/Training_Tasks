import {
	ChangeEvent,
	createContext,
	useContext,
	useReducer,
	ReactNode,
} from "react";

interface initialStateType {
	count: number;
	step?: number;
}

const initialState: initialStateType = {
	count: 0,
	step: 1,
};

type ActionType =
	| "counter/Increament"
	| "counter/Decreament"
	| "counter/HandleCounterInput";

type ActionObj = {
	type: ActionType;
	payLoad?: number;
};

const reducer = (
	state: initialStateType,
	action: ActionObj
): initialStateType => {
	switch (action.type) {
		case "counter/Increament":
			return { ...state, count: state.count + (state.step ?? 1) };
		case "counter/Decreament":
			return { ...state, count: state.count - (state.step ?? 1) };
		case "counter/HandleCounterInput":
			return { ...state, step: action.payLoad };
		default:
			return state;
	}
};

type useCounterContext = {
	state: initialStateType;
	handleIncreament: () => void;
	handleDecreament: () => void;
	handleCounterInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CounterContext = createContext<useCounterContext>({
	state: initialState,
	handleIncreament() {},
	handleDecreament() {},
	handleCounterInput() {},
});

type ChildrenType = {
	children: ReactNode;
};

const CounterContextComponent = ({ children }: ChildrenType) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const CounterContextValue: useCounterContext = {
		state,
		handleIncreament(): void {
			dispatch({ type: "counter/Increament" });
		},
		handleDecreament(): void {
			dispatch({ type: "counter/Decreament" });
		},
		handleCounterInput(e: ChangeEvent<HTMLInputElement>) {
			dispatch({
				type: "counter/HandleCounterInput",
				payLoad: Number(e.target.value),
			});
		},
	};

	return (
		<CounterContext.Provider value={CounterContextValue}>
			{children}
		</CounterContext.Provider>
	);
};

export const useCounterContext = () => {
	const values = useContext(CounterContext);
	return values;
};

export default CounterContextComponent;
