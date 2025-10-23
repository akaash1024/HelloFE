import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import { Login } from "./pages/Login";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/connections",
        element: <Connections />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      
    ],
  },
]);

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};

export default App;
