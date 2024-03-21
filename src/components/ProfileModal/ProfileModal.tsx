import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../features/user/userSlice";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userDetails: any;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  userDetails,
}) => {
  const [formData, setFormData] = useState(userDetails);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //dispatch(fetchUser(formData));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"></div>
    </div>
  );
};

export default ProfileModal;
