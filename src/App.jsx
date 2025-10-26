import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import RootLayout from "./components/RootLayout";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import Menu from "./pages/menu/Menu";
export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
    {
      index:true,
      element:<Home/>
    },

    {
      path: 'about',
      element:<About/>
    },

    {
      path:'contact',
      element:<Contact/>
    },

    {
      path:'menu',
      element:<Menu/>
    },
    {
      path: '*',
      element:<NotFound/>
    }
    
      ]
    },
  ])
  return <RouterProvider router = {router} />
}
