import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import Home from "./home/Home"
import UserAdd from "./users/UserAdd"
export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout/>,
      children:[
        {
          index:'true',
          element:<Home/>
        },

        {
          path:'add-user',
          element:<UserAdd/>
        }

      ]
    }
  ])
  return <RouterProvider router={router}/>
}
