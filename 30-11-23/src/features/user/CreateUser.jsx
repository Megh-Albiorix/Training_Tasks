import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        className="mb-6 w-72 rounded-md border-b-2 border-stone-300 bg-transparent px-1 py-2 placeholder:text-center focus:border-b-2  focus:border-yellow-500 focus:outline-none"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button className="px-3 py-3" to="/order/new">
            Start Ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
