import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound />,
  },
  // {
  //   path: "/about",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "/login",
  //   element: <LogIn />,
  // },
  // {
  //   path: "/create-account",
  //   element: <CreateAccount />,
  // },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
