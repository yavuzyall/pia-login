import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import api from "../../services/axiosConfig";

const DashboardPage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  }

  const handleRequest = () => {
    
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Dashboard</h1>
      <p>Welcome Dashboard...</p>
      <button 
      onClick={handleLogout}
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-1/2 m-auto"
      >Logout</button>
      <button onClick={handleRequest}>
        Three Request
      </button>
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
          api(config).then(function (response) {
            // console.log(JSON.stringify(response.data));
          });
          api(config1).then(function (response) {
            // console.log(JSON.stringify(response.data));
          });
          api(config2).then(function (response) {
            // console.log(JSON.stringify(response.data));
          });
        }}
      >
        Get All
      </button>
    </div>
  );
};

export default DashboardPage;
