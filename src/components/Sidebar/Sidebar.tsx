import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getCategories } from "../../services/categoryService";
import { setCategories } from "../../features/categories/categoriesSlice";
import IconBoxes from "../../shared-components/icons/IconBoxes";
import IconHome from "../../shared-components/icons/IconHome";
import IconUsers from "../../shared-components/icons/IconUsers";
import IconPost from "../../shared-components/icons/IconPost";
import IconComments from "../../shared-components/icons/IconComments";
import IconTodoList from "../../shared-components/icons/IconTodoList";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const menuData = [
    {
      name: "Home",
      path: "/",
      icon: <IconHome className="w-5 h-5" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <IconBoxes className="w-5 h-5" />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <IconUsers className="w-5 h-5" />,
    },
    {
      name: "Posts",
      path: "/posts",
      icon: <IconPost className="w-5 h-5" />,
    },
    {
      name: "Comments",
      path: "/comments",
      icon: <IconComments className="w-5 h-5" />,
    },
    {
      name: "Todos",
      path: "/todos",
      icon: <IconTodoList className="w-5 h-5" />,
    },
  ];

  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  useEffect(() => {
    getCategories().then((data) => {
      dispatch(setCategories(data));
    });
  }, [dispatch, categories.length]);
  return (
    <div className={`fixed bg-indigo-600 w-16 md:w-64 ${isOpen ? 'left-0' : '-left-64'} p-4 transition-all duration-300 ease-in-out min-h-screen`}>
      <div className="bg-white m-1 rounded p-1">
        <img src="https://img.logoipsum.com/262.svg" alt="Logo" />
      </div>
      <ul
        onClick={() => console.log("clicked")}
        className="w-full list-none p-0 mt-6"
      >
        {menuData.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path} end>
              <div className="flex items-center p-2 text-base font-normal text-white hover:bg-indigo-500 rounded-lg">
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
