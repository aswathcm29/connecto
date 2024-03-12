import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './components/HomePage/Main';
import {Router, RouterProvider, createBrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Profile from './components/ProfilePage/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Main/>,
      },
      {
        path:'/home',
        element:<Main/>,
      },
      {
        path:'/profile/:username',
        element:<Profile/>,
      }
    ]
  }
])


root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
