import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { fetchProductsByCategory } from "../../services/productService";
import { setProducts } from "../../features/products/productsSlice";

const Accordion = ({ category }: {category: string}) => {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products[category] || []);

    const toggleAcordion = () => {
        setIsOpen(!isOpen);
        if (products.length === 0) {
            fetchProductsByCategory(category).then((data) => {
                dispatch(setProducts({category, products: data}));
            });
        }
    };

  return (
  <div className="accordion-item">
    <button onClick={toggleAcordion} className="accordion-button w-full text-left px-4 py-2 transition-colors duration-200 ease-in-out hover:bg-blue-700 focus:outline-none">
        {category.replace(/-/g, ' ').split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
    </button>
    <div className={`accordion-content transition-all duration-200 ease-in-out ${isOpen ? 'block' : 'hidden'} `}>
        <ul className="list-none pl-5 space-y-2 ">
            {products.map((product, index) => (
                <li key={index} className="text-gray-200 hover:text-white hover:cursor-pointer">{product.title}</li>
            ))}
        </ul>
    </div>
  </div>
  );
};

export default Accordion;
