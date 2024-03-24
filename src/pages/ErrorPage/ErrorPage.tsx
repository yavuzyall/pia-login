import React from "react";
import Layout from "../../layout/Layout";

const ErrorPage = () => {
  return (
    <Layout
      title="Unavailable page"
      description="Please proceed to the home page or another page."
    >
      <div className="w-full flex h-[70vh] justify-center items-center">
        <div className="flex flex-col items-center">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            className="w-20 h-20"
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M3 7v4a1 1 0 001 1h3M7 7v10M10 8v8a1 1 0 001 1h2a1 1 0 001-1V8a1 1 0 00-1-1h-2a1 1 0 00-1 1zM17 7v4a1 1 0 001 1h3M21 7v10"></path>
          </svg>
          <h1 className="text-3xl font-bold">Page Not Found</h1>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
