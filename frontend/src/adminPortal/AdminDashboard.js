import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin-login");
  };

  return (
    <div className="flex flex-col  min-h-screen bg-gray-50" style={{height:'100vh'}}>
      <h1 className="text-3xl font-bold mb-4 text-maroon-700" style={{marginTop:'100px',textAlign:'center'}}>
        Welcome, Admin!
      </h1>
      <button
        onClick={handleLogout}
        style={{marginLeft:'550px'}}
        className="bg-maroon-600 text-white py-2 px-4 rounded hover:bg-maroon-700"
      >
        Logout
      </button>
    </div>
  );
}
