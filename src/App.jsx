import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Main from "./LayOut/Main";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Orders from "./Components/Orders/Orders";
import Login from "./Components/LogIn/Login";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/orders",
          element: <Orders></Orders>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
      ]
    },
  ]);


  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
