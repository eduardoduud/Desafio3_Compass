import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/home";
import "../index.css";
import React from "react";
import Header from "./components/pages/root/header";
import Footer from "./components/pages/root/footer";
import Shop from "./components/pages/shop/shop";
import ProductPage from "./components/pages/product/productPage";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
    //errorElement: <ErrorPage />,
  },
  {
    path: "/products/:id",
    element: <ProductPage />,
    //todo: errorElement: <ErrorPage />,
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
