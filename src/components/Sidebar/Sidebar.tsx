import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getCategories } from "../../services/categoryService";
import { setCategories } from "../../features/categories/categoriesSlice";
import Accordion from "../Accordion/Accordion";

const Sidebar = () => {
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
  <div className="bg-blue-800 text-white w-64 min-h-screen p-4 fixed top-0 left-0">
    <h3 className="text-lg font-semibold p-3 border-b border-gray-300 mb-4">Categories</h3>
    <ul className="list-none p-0">
        {categories.map((category, index) => (
            <Accordion key={index} category={category}/>
        ))}
    </ul>
  </div>
  );
};

export default Sidebar;
