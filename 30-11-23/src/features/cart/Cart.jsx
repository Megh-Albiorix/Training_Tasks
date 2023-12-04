import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const userName = useSelector((store) => store.user.username);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2 px-2 py-3">
        <Button className="px-3 py-3" to="/order/new">
          Order Pizzas [Total
          {formatCurrency(
            cart.reduce((acc, item) => (acc += item.totalPrice), 0),
          )}
          ]
        </Button>
        <button
          onClick={handleClick}
          className="inline-block rounded-full border-2 px-3 py-3 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:border-stone-400 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
