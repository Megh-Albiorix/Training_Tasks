import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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

          <Button className="ml-auto px-2 py-1 text-[0.75rem]">
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
