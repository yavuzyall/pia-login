import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import api from "../../services/axiosConfig";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  const handleRequest = () => {};

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-4 ml-64">
        <Sidebar />
        <div className="flex-1 p-4 ml-64">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p>Welcome Dashboard...</p>
          <button
            onClick={handleLogout}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-1/2 m-auto"
          >
            Logout
          </button>
          <button onClick={handleRequest}>Three Request</button>
          <button
            className="border-2 border-blue-900 hover:border-blue-500 active:border-blue-300 focus:border-blue-700 transition-colors duration-200 rounded-md px-2 bg-white text-black"
            onClick={() => {
              var config = {
                method: "get",
                url: "https://dummyjson.com/products/?delay=5000",
                headers: {},
              };
              var config1 = {
                method: "get",
                url: "https://dummyjson.com/products/category/smartphones/?delay=3000",
                headers: {},
              };
              var config2 = {
                method: "get",
                url: "https://dummyjson.com/products/1/?delay=2000",
                headers: {},
              };
              var config3 = {
                method: "get",
                url: "https://dummyjson.com/products/1/?delay=2000",
                headers: {
                  loadingMessage: "Ürün yükleniyor...",
                },
              };
              var config4 = {
                method: "get",
                url: "https://dummyjson.com/products/?delay=5000",
                headers: {
                  loadingMessage: "Ürünler listeleniyor...",
                },
              };
              api(config).then(function (response) {
                // console.log(JSON.stringify(response.data));
              });
              api(config1).then(function (response) {
                // console.log(JSON.stringify(response.data));
              });
              api(config2).then(function (response) {
                // console.log(JSON.stringify(response.data));
              });
              api(config3).then(function (response) {
                // console.log(JSON.stringify(response.data));
              });
              api(config4).then(function (response) {
                // console.log(JSON.stringify(response.data));
              });
            }}
          >
            Get All
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
