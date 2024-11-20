
import { createRoot } from 'react-dom/client'

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root.jsx';
import ProductList from './components/ProductList.jsx';
import CreateProduct from './components/CreateProduct.jsx';
import CategoryBlogs from "./Components/CategoryBlogs.jsx";
import { AllproductsLoader, categoryLoader,  productsLoader, singleProductDetails } from './loader/blogLoader.js';
import ProductDetails from './Components/ProductDetails.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: categoryLoader,
    children: [
      {
        path: "/",
        element: <ProductList />,
        index: true,
        loader: productsLoader
      },
      {
        path: "/CreateProduct",
        element: <CreateProduct />
      },
      {
        path: "/CategoryBlogs/:categoryName",
        element:<CategoryBlogs />,
        loader: AllproductsLoader

      }

    ]

  },
  {
    path: "/CategoryBlogs/:categoryName/:productName",
    element:<ProductDetails />,
    loader: singleProductDetails

  }
],
{
  future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
  },
}
)

createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} future={{
    v7_startTransition: true,
}}/>

)
