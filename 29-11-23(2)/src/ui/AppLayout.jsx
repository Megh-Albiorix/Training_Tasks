import Header from "./Header";
import CartOverview from "./../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
function AppLayout() {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	return (
		<div>
			<Header />
			<main>
				<Outlet />
				<CartOverview />
			</main>
		</div>
	);
}

export default AppLayout;
