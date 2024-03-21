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
import { User } from "../../modals/User";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function filterUserDetails(user: any) {
    const fieldsToKeep = [
      "firstName",
      "lastName",
      "email",
      "username",
      "gender",
    ];
    return Object.entries(user)
      .filter(([key, value]) => fieldsToKeep.includes(key))
      .reduce((details, [key, value]) => ({ ...details, [key]: value }), {});
  };

  useCallback(() => {
    dispatch(fetchUser() as any);
  }, [dispatch]);

  const user = useSelector((state: RootState) => state.user.user);
  const userDetails = user ? filterUserDetails(user) : {};
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <Layout title="Home" description="View and edit your profile">
      <div className="flex justify-between">
        <div className="flex w-1/4 justify-start gap-8 items-start">
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
          <div className="flex flex-col align-middle mt-6">
            <button className="bg-indigo-500 rounded p-1 font-bold text-white">
              Change Avatar
            </button>
            <span className="text-medium">JPG, GIF or PNG. 1MB max.</span>
          </div>
        </div>
        <div className="flex flex-col w-3/4">
          {Object.entries(userDetails).map(([key, value]: any) => (
            <>
              <div key={key} className="flex items-center space-x-4 py-1">
                <p className="text-gray-800 capitalize w-1/4">{key}:</p>
                <p className="text-gray-600 flex-1">{value.toString()}</p>
                <button className="text-indigo-500 hover:text-indigo-700 font-bold border py-1 px-4 rounded border-indigo-500 hover:border-indigo-700">
                  Edit
                </button>
              </div>
              <hr className="border border-gray-200" />
            </>
          ))}
          <div className="flex w-2/4 items-start mt-4 gap-4 py-1">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between gap-12">
                <div className="flex flex-col w-2/4">
                  <h2>Suspend Account</h2>
                  <p className="text-gray-600 text-sm italic">
                    You can temporarily suspend your account here. 
                  </p>
                </div>
                <button className="mr-auto text-white bg-orange-500 rounded px-4 py-2 font-bold self-start">
                  Suspend my account
                </button>
              </div>
              <hr />
              <div className="flex flex-col gap-6">
                <div className="flex justify-between gap-12">
                  <div className="flex flex-col w-2/4">
                    <h2>Suspend Account</h2>
                    <p className="text-gray-600 text-sm italic">
                      No longer want to use our service? You can delete your
                      account here. This action is not reversible. All
                      information related to this account will be deleted
                      permanently.
                    </p>
                  </div>
                  <button className="mr-auto text-white bg-red-500 rounded px-4 py-2 font-bold self-start">
                    Delete my account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
