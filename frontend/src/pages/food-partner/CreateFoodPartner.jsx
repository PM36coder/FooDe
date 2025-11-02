import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../../store/UserSlice";

const PartnerProtected = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showDeniedScreen, setShowDeniedScreen] = useState(false);

  // ✅ Run logout & redirect timer ONLY when role mismatch happens
  useEffect(() => {
    if (isAuthenticated && role !== "partner") {
      setShowDeniedScreen(true);

      const timer = setTimeout(() => {
        dispatch(logout());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, role, dispatch]);


  // ✅ If no login → go to partner login
  if (!isAuthenticated) return <Navigate to="/partner/login" replace />;

  // ✅ If logged in but NOT partner → show denied screen & auto logout
  if (showDeniedScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-xl font-semibold">
        🚫 Access Denied — You are not a Food Partner!
        <br />
        Logging out...
      </div>
    );
  }

  // ✅ Correct role → allow access
  return children;
};

export default PartnerProtected;
