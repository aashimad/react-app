import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from '../src/layout/AppLayout';
import ProductDetail from '../src/pages/product/ProductDetail';
import Home from '../src/pages/home/Home';
import './styles/global.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <AppLayout />, children: [
        { path: '/', element: <Home /> },
        { path: '/pages', element: <Home /> },
        { path: '/contact', element: <Home /> },
        { path: '/about', element: <Home /> },
        {
          path: '/product', children: [{
            path: ':productName', element: <ProductDetail />
          }]
        }
      ]
    },
  ]);
  

  return (
    <RouterProvider router={router} />
  );
}

export default App;
