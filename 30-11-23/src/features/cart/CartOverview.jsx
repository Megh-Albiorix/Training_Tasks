import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "./../../utils/helpers";

function CartOverview() {
  const cart = useSelector((store) => store.cart.cart);

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span> Pizzas in the Cart : {cart.length}</span>
        <span>
          Total Price:{" "}
          {formatCurrency(
            cart.reduce((acc, item) => (acc += item.totalPrice), 0),
          )}
        </span>
      </p>
      <Link to="./cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
