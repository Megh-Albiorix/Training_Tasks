import { useCounterContext } from "./CounterContext";

const Counter = () => {
	const { state, handleIncreament, handleDecreament, handleCounterInput } =
		useCounterContext();
	console.log(state.step);

	return (
		<>
			<div className="counter-div">
				<div>
					<h1>Current Count is {state.count}</h1>
				</div>
				<button onClick={handleIncreament}>+</button>
				<button onClick={handleDecreament}>-</button>
			</div>
			<div className="step">
				<input
					type="text"
					onChange={handleCounterInput}
					className="counter-input"
				/>
				<span>{state.step}</span>
			</div>
		</>
	);
};

export default Counter;
