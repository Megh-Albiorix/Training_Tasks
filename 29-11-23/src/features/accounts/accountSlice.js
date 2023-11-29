import { createSlice } from "@reduxjs/toolkit";
// import accountReducer from "./accountSlice";

const initialState = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
	isLoading: false,
};

const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		deposit(state, action) {
			state.balance += action.payload;
			state.isLoading = false;
		},
		withdraw(state, action) {
			state.balance -= action.payload;
		},
		requestLoan: {
			prepare(amount, purpose) {
				return {
					payload: { loan: amount, loanPurpose: purpose },
				};
			},

			reducer(state, action) {
				if (state.loan > 0) return;
				state.loan = action.payload.loan;
				state.loanPurpose = action.payload.loanPurpose;
				state.balance += action.payload.loan;
			},
		},
		payLoan(state, action) {
			state.balance -= state.loan;
			state.loan = 0;
			state.loanPurpose = "";
		},
		convertingCurrency(state) {
			state.isLoading = true;
		},
	},
});

export function deposit(amount, currency) {
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
export default accountSlice.reducer;
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

// function accountReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case "account/deposit":
// 			return {
// 				...state,
// 				balance: state.balance + action.payload,
// 				isLoading: false,
// 			};
// 		case "account/withdraw":
// 			return { ...state, balance: state.balance - action.payload };
// 		case "account/requestLoan":
// 			return {
// 				...state,
// 				loan: action.payload.loan,
// 				loanPurpose: action.payload.purpose,
// 				balance: state.balance + action.payload.loan,
// 			};
// 		case "account/payLoan":
// 			return {
// 				...state,
// 				loan: 0,
// 				balance: state.balance - state.loan,
// 				loanPurpose: "",
// 			};
// 		case "account/covertingCurrency":
// 			return { ...state, isLoading: true };
// 		default:
// 			return state;
// 	}
// }

// function deposit(amount, currency) {
// 	if (currency === "INR") return { type: "account/deposit", payload: amount };
// 	//Using Thunk as a middleware
// 	return async function (dispatch, getState) {
// 		//Api call
// 		const host = "api.frankfurter.app";
// 		try {
// 			dispatch({ type: "account/convertingCurrency" });
// 			const res = await fetch(
// 				`https://${host}/latest?amount=${amount}&from=${currency}&to=INR`
// 			);
// 			const data = await res.json();
// 			dispatch({ type: "account/deposit", payload: data.rates.INR });
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};
// }
// function withdraw(amount) {
// 	return { type: "account/withdraw", payload: amount };
// }
// function requestLoan(amount, purpose) {
// 	return {
// 		type: "account/requestLoan",
// 		payload: { loan: amount, loanPurpose: purpose },
// 	};
// }
// function payLoan() {
// 	return { type: "account/payLoan" };
// }
