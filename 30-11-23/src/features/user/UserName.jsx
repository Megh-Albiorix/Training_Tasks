// import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  const userName = useSelector((store) => store.user.username);

  return (
    <p className="hidden grow basis-0 text-right text-sm font-semibold md:block">
      {userName}
    </p>
  );
};

export default UserName;
