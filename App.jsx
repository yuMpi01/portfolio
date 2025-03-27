import Works from "./pages/Works"
import SinglePost from "./pages/SinglePost"
import FirstPage from "./pages/FirstPage"
import { createBrowserRouter,RouterProvider } from "react-router-dom"

const router=createBrowserRouter([
    {path:"/",element:<FirstPage/> },
    {path:"/SinglePost",element:<SinglePost/> },
    {path:"/Works",element:<Works/> },
])

export default function App(){
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}