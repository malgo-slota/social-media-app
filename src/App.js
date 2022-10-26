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
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftSidebar/>
          <Outlet/>
          <RightSidebar/>
        </div>
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
