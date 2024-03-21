import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-1 transition-all ${isSidebarOpen ? "ml-64" : "ml-0"}`}
      >
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} title={title} description={description}/>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
