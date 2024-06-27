import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./layouts/Main";
import AddExpense from "./pages/AddExpense";
import Summary from "./pages/Summary";
const App = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <Main /> },
    {
      path: "/admin",
      element: <Home />,
      children: [
        { index: true, element: <Summary /> },
        { path: "/admin/addExpense", element: <AddExpense /> },
        ,
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
