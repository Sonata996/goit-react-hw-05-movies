import {Outlet} from "react-router-dom"
import { Navigation } from "./Navigation"
import { Suspense } from "react"


export const Layout = () =>{
return(
    <div>
    <header>
        <Navigation />
    </header>

    <Suspense fallback={<h1>LOADING PAGE...</h1>}>
            <Outlet />
          </Suspense>
    </div>
)
}