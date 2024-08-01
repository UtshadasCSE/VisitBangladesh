import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HashLoader from "react-spinners/HashLoader";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <HashLoader />
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoutes;
