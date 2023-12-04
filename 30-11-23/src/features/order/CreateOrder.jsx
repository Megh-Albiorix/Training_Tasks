import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "./../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import store from "./../../store";
import { clearCart } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((store) => store.cart.cart);
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submitting";
  const {
    userName,
    status: addressStatus,
    address,
    position,
    error,
  } = useSelector((store) => store.user);
  const isLoading = addressStatus === "loading";

  const cartPrice = cart.reduce((acc, item) => (acc += item.totalPrice), 0);
  const priorityPrice = withPriority ? cartPrice * 0.2 : 0;
  const totalPrice = formatCurrency(cartPrice + priorityPrice);

  const formErrors = useActionData();
  const dispatch = useDispatch();

  return (
    <div className="my-10 px-2">
      <h2 className="ml-4 text-base">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" className="my-2 p-4">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className=" text-base sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            defaultValue={userName}
            name="customer"
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className=" text-base sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mx-2 mt-2 block rounded-lg bg-red-100 p-2 text-red-600">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className=" text-base sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
              defaultValue={address}
            />
            {addressStatus === "error" && (
              <p className="mx-2 mt-2 block rounded-lg bg-red-100 p-2 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>
          <Button
            className="relative w-32 self-center px-2 py-1 text-sm sm:right-1 sm:top-[0.3rem]"
            isDisabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchAddress());
            }}
          >
            {isLoading ? `Getting Position...` : "Get Position"}
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-center sm:justify-start">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className=" mx-2 h-6 w-6 accent-yellow-400 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="flex justify-center">
          <input
            className=""
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
          />
          <input
            className=""
            type="hidden"
            name="postion"
            value={
              position.longitude && position.lattitude
                ? JSON.stringify(position)
                : ""
            }
          />
          <Button className="mt-6 px-3 py-3" isDisabled={isSubmiting}>
            {!isSubmiting ? `Order now for ${totalPrice}` : `Placing Order...`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
    position: JSON.parse(data.position),
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "Please give your correct phone number we might need it to contact you";
  }

  if (Object.keys(errors).length > 0) return errors;
  try {
    const newOrder = await createOrder(order);
    console.log(newOrder);
    store.dispatch(clearCart());
    return redirect(`/order/${newOrder.id}`);
  } catch (err) {
    console.log(err);
  }
};

export default CreateOrder;
