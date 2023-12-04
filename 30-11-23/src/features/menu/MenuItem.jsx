import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  addItem,
  decreaseItemQty,
  deleteItem,
  increaseItemQty,
} from "../cart/cartSlice";
import { clearConfigCache } from "prettier";

function MenuItem({ pizza }) {
  const cart = useSelector((store) => store.cart.cart);

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const item = cart.find((item) => {
    return item.pizzaId === id;
  });

  const handleClick = () => {
    const pizza = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };

    dispatch(addItem(pizza));
  };

  return (
    <li className="flex gap-4 p-2">
      <img
        className={`${soldOut ? "opacity-70 grayscale" : ""} h-24 rounded-md`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col justify-start">
        <p>{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center  gap-2 text-sm">
          {!soldOut ? (
            <p className="">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text font-medium uppercase text-stone-400">
              Sold out
            </p>
          )}

          {!soldOut && (
            <>
              {!item && (
                <Button
                  className="ml-auto px-2 py-1 text-[0.75rem]"
                  onClick={handleClick}
                >
                  Add to Cart
                </Button>
              )}
              {item?.quantity > 0 && (
                <div className="ml-auto">
                  <button
                    onClick={() => dispatch(increaseItemQty(id))}
                    className="mx-2 inline-block rounded-full border-2 px-1 py-1 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed"
                  >
                    ➕
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(decreaseItemQty(id))}
                    className="mx-2 inline-block rounded-full border-2 px-1 py-1 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed"
                  >
                    ➖
                  </button>
                  <button
                    onClick={() => dispatch(deleteItem(id))}
                    className="inline-block rounded-full border-2 px-1 py-1 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:border-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed"
                  >
                    🗑️
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
