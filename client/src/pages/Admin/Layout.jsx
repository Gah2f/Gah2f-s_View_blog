import React from "react";
import { useAppContext } from "../../Context/AppContext";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/Admin/SideBar";

function Layout() {

  const { navigate , logout } = useAppContext();

  

  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <h1>
          <span onClick={() => navigate("/")} className="text-xl font-semibold">
            Gah2f's View
          </span>
        </h1>

        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="flex h-[calc(100vh-70px)]">
        <div>
          <SideBar/>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
