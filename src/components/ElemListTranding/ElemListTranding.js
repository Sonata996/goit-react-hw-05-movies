// import { useState } from "react"
import { Link} from "react-router-dom"



export const ElemListTranding = ({ element:{original_title, id}}) =>{
return (
    <li >
        <Link to={`/movies/${id}`}>{original_title}</Link>
    </li>
)
}