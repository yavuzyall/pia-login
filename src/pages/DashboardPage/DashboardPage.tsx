import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const DashboardPage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Dashboard</h1>
      <p>Welcome Dashboard...</p>
      <button 
      onClick={handleLogout}
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg w-1/2 m-auto"
      >Logout</button>
    </div>
  );
};

export default DashboardPage;
