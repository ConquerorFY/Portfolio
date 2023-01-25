import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';
import './styles/App.css';
import ProfilePage from './views/ProfilePage';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import EducationPage from './views/EducationPage';
import ExperiencePage from './views/ExperiencePage';

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProfilePage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      },
      {
        path: "/education",
        element: <EducationPage />
      },
      {
        path: "/experience",
        element: <ExperiencePage />
      }
    ]
  }
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
