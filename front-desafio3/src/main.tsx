import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/home";
import "../index.css";
import React from "react";
import Header from "./components/pages/root/header";
import Footer from "./components/pages/root/footer";
import Shop from "./components/pages/shop/shop";
import Product from "./components/pages/product/product";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home filterDiscounted={true} pagination={{ limit: 8, offset: 0 }} />
    ),
    //errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: (
      <Shop pagination={{ limit: 16, offset: 0 }} filterDiscounted={true} />
    ),
    //errorElement: <ErrorPage />,
  },
  {
    path: "/products/:id",
    element: <Product />,
    //errorElement: <ErrorPage />,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </QueryClientProvider>
  </React.StrictMode>,
);
