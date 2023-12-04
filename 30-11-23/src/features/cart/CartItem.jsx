import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decreaseItemQty, deleteItem, increaseItemQty } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <li className="p-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="my-0.5 flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <button
          onClick={() => dispatch(increaseItemQty(item.pizzaId))}
          className=" inline-block rounded-full border-2 px-1 py-1 text-sm font-semibold uppercase text-stone-800 transition-colors duration-300 hover:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed"
        >
          ➕
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch(decreaseItemQty(item.pizzaId))}
          className="inline-block rounded-full border-2 px-1 py-1 text-sm font-semibold uppercase text-stone-800 transition-colors duration-300 hover:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed"
        >
          ➖
        </button>

        <Button className=" px-2 py-1 text-sm" onClick={handleClick}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
