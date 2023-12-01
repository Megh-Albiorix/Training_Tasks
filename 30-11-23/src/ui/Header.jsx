import { Link } from "react-router-dom";
import SearchOrder from "./../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-500 bg-yellow-500 px-4 py-4 text-center font-semibold uppercase sm:px-6">
      <Link to="/" className="grow basis-0 text-left tracking-[5px]">
        React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName className="grow basis-0" />
    </header>
  );
}

export default Header;
