import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import { Home } from "./pages/Home"
import {UserLogin} from './pages/user/UserLogin'
import {UserSignup} from './pages/user/UserSignUp'
import { PartnerLogin } from "./pages/food-partner/PartnerLogin"
import { PartnerSign } from "./pages/food-partner/PArtnerSign"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,path:'', element: <Home /> },

      // ✅ User Routes
      { path: "user/login", element: <UserLogin/> },
      { path: "user/signup", element: <UserSignup /> },

      // ✅ Food Partner Routes
      { path: "partner/login", element: <PartnerLogin /> },
      { path: "partner/signup", element: <PartnerSign /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
