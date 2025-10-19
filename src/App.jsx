import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import Categories from "./categories/Categories"
import CataItems from "./cata-items/CataItems"
export default function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout/>,
      children:[
        {
          index:'true',
          element:<Categories/>
        },
        {
          path: 'cata-items/:name',
          element:<CataItems/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}
