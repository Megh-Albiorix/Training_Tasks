import { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    if (!username) return;
    e.preventDefault();
    dispatch(updateName(username));
    navigate("/menu");
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
          <Button className="px-3 py-3" onClick={handleSubmit}>
            Start Ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
