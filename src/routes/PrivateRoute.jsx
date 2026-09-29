import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";

function PrivateRoute() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
