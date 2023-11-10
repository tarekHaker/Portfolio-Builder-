
import './App.css';
import SignIn from "./component/SignInSide";
import SignUp from "./component/singnUpSide";
import ButtonAppBar from "./component/navBar"
import Nav from "./component/nav";
import HomePage from './component/pages/homePage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

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
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
