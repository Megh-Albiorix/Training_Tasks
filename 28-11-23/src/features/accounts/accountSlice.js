const initialState = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
	isLoading: false,
};

function accountReducer(state = initialState, action) {
	switch (action.type) {
		case "account/deposit":
			return {
				...state,
				balance: state.balance + action.payload,
				isLoading: false,
			};
		case "account/withdraw":
			return { ...state, balance: state.balance - action.payload };
		case "account/requestLoan":
			return {
				...state,
				loan: action.payload.loan,
				loanPurpose: action.payload.purpose,
				balance: state.balance + action.payload.loan,
			};
		case "account/payLoan":
			return {
				...state,
				loan: 0,
				balance: state.balance - state.loan,
				loanPurpose: "",
			};
		case "account/covertingCurrency":
			return { ...state, isLoading: true };
		default:
			return state;
	}
}

function deposit(amount, currency) {
	if (currency === "INR") return { type: "account/deposit", payload: amount };
	//Using Thunk as a middleware
	return async function (dispatch, getState) {
		//Api call
		const host = "api.frankfurter.app";
		try {
			dispatch({ type: "account/convertingCurrency" });
			const res = await fetch(
				`https://${host}/latest?amount=${amount}&from=${currency}&to=INR`
			);
			const data = await res.json();
			dispatch({ type: "account/deposit", payload: data.rates.INR });
		} catch (err) {
			console.log(err);
		}
	};
}
function withdraw(amount) {
	return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
	return {
		type: "account/requestLoan",
		payload: { loan: amount, loanPurpose: purpose },
	};
}
function payLoan() {
	return { type: "account/payLoan" };
}

export default accountReducer;
export { deposit, withdraw, requestLoan, payLoan };
