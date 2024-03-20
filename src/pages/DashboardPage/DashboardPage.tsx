import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import api from "../../services/axiosConfig";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useCallback, useState } from "react";
import Header from "../../components/Header/Header";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/user/userSlice";
import { RootState } from "../../app/store";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useCallback(() => {
    dispatch(fetchUser() as any);
  }, [dispatch]);
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <Layout>
      <div className="flex justify-between">
        <div className="flex w-1/4 justify-start gap-8">
          <div
            className="bg-white m-1 rounded-full p-1 w-24 h-24 overflow-hidden flex items-center align-middle border-4 border-gray-300"
            id="avatar"
          >
            <img
              src={user?.image}
              alt="Logo"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="flex flex-col justify-center">
            <button className="bg-indigo-500 rounded p-1 font-bold text-white">
              Change Avatar
            </button>
            <span className="text-medium">JPG, GIF or PNG. 1MB max.</span>
          </div>
        </div>
        <div className=""></div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
