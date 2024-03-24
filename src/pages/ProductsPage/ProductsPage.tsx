import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Layout from "../../layout/Layout";
import ProductRow from "../../components/ProductRow/ProductRow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  fetchProducts,
  Product,
  setProducts,
} from "../../features/products/productsSlice";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [listProducts, setListProducts] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setListProducts(true);
    event.preventDefault();
    if (!searchTerm.trim()) {
      setDisplayProducts(products);
      return;
    } else {
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayProducts(filtered);
    }
  };

  return (
    <Layout title="Product" description="View, edit, add, or delete product">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="relative">
            <input
              type="text"
              className="search-input border border-gray-300 hover:border-gray-500 rounded-md max-w-46 min-w-32 focus:outline-none px-2"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="flex items-center align-middle">
              <button type="button" onClick={handleSearch}>
                <div className="absolute top-0 right-0 border border-indigo-500 hover:border-indigo-700 rounded-md p-0.5">
                  <svg
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    x="0px"
                    y="0px"
                    height="1em"
                    width="1em"
                    className="w-5 h-5 text-indigo-500 hover:text-indigo-700"
                  >
                    <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div>
            <button className="add-product-btn bg-indigo-500 rounded py-2 px-2 font-bold text-white">
              Add Product
            </button>
          </div>
        </div>
        {listProducts ? (
          <div>
            <table className="min-w-full max-w-full divide-y">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Brand
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Discount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {displayProducts.map((product: any) => (
                  <ProductRow key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default ProductsPage;
