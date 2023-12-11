import Counter from "./components/counter/Counter";
import CounterContext from "./components/counter/CounterContext";

const App = () => {
	return (
		<div className="app">
			<CounterContext>
				<Counter />
			</CounterContext>
		</div>
	);
};

export default App;
