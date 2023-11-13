import SignIn from "./component/SignInSide";
import SignUp from "./component/singnUpSide";
import ButtonAppBar from "./component/navBar";
import Nav from "./component/nav";
import HomePage from "./component/pages/homePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./component/pages/user";
import Form from "./component/pages/form";
import AboutPage from "./component/pages/aboutPage";
import EducationPage from "./component/pages/EducationPage";
import SkillsPage from "./component/pages/SkillsPage";
import ExperiencePage from "./component/pages/ExperiencePage";
import ProjectsPage from "./component/pages/ProjectsPage";
import CallToActionPage from "./component/pages/CallToActionPage";
import Welcome from "./component/pages/welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/education",
    element: <EducationPage />,
  },
  {
    path: "/skills",
    element: <SkillsPage />,
  },
  {
    path: "/experiences",
    element: <ExperiencePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/call-to-action",
    element: <CallToActionPage />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
