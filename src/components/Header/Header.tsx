import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { fetchUser, reset } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, title, description }: { toggleSidebar: any, title: string, description: string }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    dispatch(fetchUser() as any);
  }, [dispatch]);
  const user = useSelector((state: RootState) => state.user.user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    reset();
    navigate("/login");
  };

  return (
    <header className="flex flex-col justify-between align-center p-2 bg-white w-full z-10 mb-4 mt-0 pt-0">
      <div className="flex justify-between">
        <button onClick={() => toggleSidebar((prev: boolean) => !prev)}>
          <div className="border border-indigo-500 hover:border-indigo-700 rounded-md p-0.5">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="w-5 h-5 text-indigo-500 hover:text-indigo-700"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>
        </button>
        <div
          className="flex items-center align-center p-2 justify-between gap-4 cursor-pointer"
          onClick={() => setIsHidden(!isHidden)}
        >
          <div className="bg-white m-1 rounded-full p-1 w-12 h-12 overflow-hidden flex items-center align-middle border-2">
            <img
              src={user?.image}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p>
            {user?.firstName} {user?.lastName}
          </p>
        </div>
        <div
          className="absolute right-10 top-16 bg-white shadow-lg rounded ring-1 ring-gray-200 flex flex-col"
          hidden={isHidden}
        >
          <button
            className="text-left p-2 hover:bg-gray-100 transition-colors"
            onClick={handleLogout}
            hidden={isHidden}
          >
            Logout
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col justify-start py-2">
        <h1 className="text-xl font-medium">{title}</h1>
        <h2 className="font-normal text-gray-600 italic">
          {description}
        </h2>
      </div>
      <hr className="shadow" />
    </header>
  );
};

export default Header;
