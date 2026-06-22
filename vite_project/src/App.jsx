import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;