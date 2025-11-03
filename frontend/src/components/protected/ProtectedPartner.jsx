/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../../utils/Axios";
import { logout } from "../../store/UserSlice";

const PartnerProtected = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ If NOT logged in at all
  if (!isAuthenticated) {
    return <Navigate to="/user/login" replace />;
  }

  useEffect(() => {
    // ✅ If user is NOT partner, logout after 2.5 sec
    if (role !== "partner") {
      const timer = setTimeout(async () => {
        try {
          await API.post("/user/logout"); // clear cookies from server
          dispatch(logout()); // clear redux state
          navigate("/partner/login", { replace: true }); // redirect
        } catch (err) {
          console.log("Logout error:", err);
        }
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [role, dispatch, navigate]);

  // ✅ If not partner, show message before redirect
  if (role !== "partner") {
    return (
      <div className="min-h-screen flex flex-col md:flex-row  items-center justify-center bg-gray-900 text-white text-xl font-semibold">
        <h1 className="text-center">🚫 Access Denied — You are not a Food Partner!</h1>
        <br />
        <span className="text-sm text-amber-400 mt-2">Redirecting...</span>
      </div>
    );
  }

  // ✅ Otherwise allow partner access
  return children;
};

export default PartnerProtected;
