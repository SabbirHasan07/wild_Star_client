
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import Main from './Layouts/Main';
import Team from './Components/Header/Team';

import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Ownreview from './Components/Ownreview/Ownreview';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Addservices from './Components/Addservices/Addservices';
import Blog from './Components/Blog/Blog';
import Update from './Components/Update/Update';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>

        },
        {
          path:"/team",
          element:<Team></Team>
        },
        
        {
          path:"/services",
          element:<Services></Services>
        },
        {
          path:"/home",
          element:<Home></Home>
        },
        {
          path:"/services/:id",
          element:<Details></Details>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path: "/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/ownreview",
          element:<PrivateRoute><Ownreview></Ownreview></PrivateRoute>
         
        },
        {
          path:'/addservice',
          element:<PrivateRoute><Addservices></Addservices></PrivateRoute>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/update/:id',
          element:<Update></Update>

        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router}>
     

     
    </RouterProvider>
  );
}

export default App;
