import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Signup from "./pages/SignUp";
const useAuth = () => {
  const hasToken = localStorage.getItem("accesstoken")
  return hasToken
};
export default function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <SignUp />;
}