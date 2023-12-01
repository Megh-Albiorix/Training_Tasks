import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit} className="grow basis-0">
      <input
        className="w-36 rounded-full bg-yellow-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-slate-500 focus:right-2 focus:w-40 focus:outline-none focus:ring-yellow-600 focus:ring-opacity-50 focus:ring-offset-4 sm:w-64 sm:focus:w-72"
        placeholder="Search Your Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
