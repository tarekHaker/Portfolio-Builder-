

import SignIn from "./component/SignInSide";
import SignUp from "./component/singnUpSide";
import ButtonAppBar from "./component/navBar"
import Nav from "./component/nav";
import HomePage from './component/pages/homePage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import User from "./component/pages/user"

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />
  },
  {
    path:'/signIn',
    element: <SignIn />
  },
  {
    path:'/signUp',
    element: <SignUp />
  },
  {
    path:'/user',
    element: <User />
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
