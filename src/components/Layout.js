import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import { Suspense } from "react"


export const Layout = () =>{
return(
    <div>
    <header>
        <Navigation />
    </header>

    <Suspense fallback={<div> <h1>Reload the page</h1></div>}>
            <Outlet />
          </Suspense>
    </div>
)
}