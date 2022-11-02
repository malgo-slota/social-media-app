import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {

  const { currentUser } = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "default"}`}>
        <Navbar/>
        <div className="main-container">
          <LeftSidebar/>
          <Outlet/>
          <RightSidebar/>
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login"/> 
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
       element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    { 
      path: "/register",
      element: <Register/>,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
