import React from "react";

const ProductRow = ({ key, product }: { key: any; product: any }) => {
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <img src={product.thumbnail} />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
        <td className="px-6 py-4 whitespace-nowrap">{product.brand}</td>
        <td className="px-6 py-4">{product.description}</td>
        <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {product.discountPercentage}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{product.rating}</td>
        <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <div className="flex gap-2">
            <button className="text-indigo-500 hover:text-indigo-700 border rounded border-indigo-500 hover:border-indigo-700 p-1">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-5 h-5"
              >
                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path>
                <path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path>
              </svg>
            </button>
            <button className="text-orange-500 hover:text-orange-700 border rounded border-orange-500 hover:border-orange-700 p-1">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-5 h-5"
              >
                <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
              </svg>
            </button>
            <button className="text-red-500 hover:text-red-700 border rounded border-red-500 hover:border-red-700 p-1">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-5 h-5"
              >
                <path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
      <hr />
    </>
  );
};

export default ProductRow;
