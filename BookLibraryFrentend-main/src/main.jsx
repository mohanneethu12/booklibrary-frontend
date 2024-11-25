import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './routes/Root';
import ErrorPage from './error-page';
import Home, {loader as homeLoader} from './routes/Home';
import Books from './routes/Books';
import Book, {loader as bookLoader} from './routes/Book';
import Signup from './routes/Signup';
import Login from './routes/Login';
import store from './app/store'
import { Provider } from 'react-redux'
import Authors, {loader as authorsLoader} from './routes/Authors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path:'/books',
        element: <Books />,
      },
      {
        path:'/authors',
        element: <Authors />,
        loader: authorsLoader,
      },
      {
        path:'/books/:bookId',
        element:<Book />,
        loader:bookLoader,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path:'/login',
        element: <Login />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
