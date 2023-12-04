import { Link } from "react-router-dom";

function Button({
  className,
  children,
  to = "",
  isDisabled = false,
  onClick = () => {},
}) {
  const cssClass = `inline-block rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ${className}`;

  if (to !== "") {
    return (
      <Link className={cssClass} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={isDisabled} className={cssClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
