import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Layout from "../../layout/Layout";

const ProductsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome Dashboard...</p>
    </Layout>
  );
};

export default ProductsPage;
