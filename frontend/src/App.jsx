import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import { Home } from "./pages/Home"
import {UserLogin} from './pages/user/UserLogin'
import {UserSignup} from './pages/user/UserSignUp'
import { PartnerLogin } from "./pages/food-partner/PartnerLogin"
import { PartnerSign } from "./pages/food-partner/PArtnerSign"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Services } from "./pages/Service"
import CreateFoodPartner from "./pages/food-partner/CreateFoodPartner"
import PartnerProtected from "./components/protected/ProtectedPartner"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {path:"about" , element:<About/>},
      {path:"contact", element:<Contact/>},
      {path:"services", element:<Services/>},

      // ✅ User Routes
      { path: "user/login", element: <UserLogin/> },
      { path: "user/signup", element: <UserSignup /> },

      // ✅ Food Partner Routes
      { path: "partner/login", element: <PartnerLogin /> },
      { path: "partner/signup", element: <PartnerSign /> },
      {path:'partner/create-food', element:<PartnerProtected><CreateFoodPartner/></PartnerProtected>}
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
