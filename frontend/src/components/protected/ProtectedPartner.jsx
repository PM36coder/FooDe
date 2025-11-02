import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PartnerProtected = ({ children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  // Not logged in at all
  if (!isAuthenticated) {
    return <Navigate to="/user/login" replace />;
  }

  setTimeout(()=>{
    
  })

  // Logged in but NOT a partner
  if (role !== "partner") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-xl font-semibold">
      <h1 > 🚫 Access Denied — You are not a Food Partner!</h1> 
      </div>
    );
  }

  return children;
};

export default PartnerProtected;
