const initialState = {
	fullName: "",
	nationalID: "",
	createdAt: "",
};

export default function customerReducer(state = initialState, action) {
	switch (action.type) {
		case "customer/createCustomer":
			return {
				...state,
				fullName: action.payload.fullName,
				nationalID: action.payload.nationalID,
				createdAt: action.payload.nationalID,
			};

		case "customer/updateName":
			return {
				...state,
				fullName: action.paylod,
			};

		default:
			return state;
	}
}

export const createCustomer = (fullName, nationalID) => {
	return {
		type: "customer/createCustomer",
		payload: {
			fullName,
			nationalID,
			createdAt: new Date().toISOString(),
		},
	};
};

export const updateName = (fullName) => {
	return {
		type: "customer/updateName",
		payload: fullName,
	};
};
