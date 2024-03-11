import React, { useEffect } from "react";
import { useLoading } from "../../contexts/LoadingContext";
import spinningDots from "../../assets/svg/spinning-dots.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Preloader: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="preloader z-50 fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white">
      <img src={spinningDots} alt="Loading" className="w-20 h-20" />
      <p className="text-1xl">Loading</p>
    </div>
  );
};

export default Preloader;
