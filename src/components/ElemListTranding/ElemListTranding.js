// import { useState } from "react"
import { LinkTranding } from "./ElemListTranding.styled"



export const ElemListTranding = ({ element:{original_title, id}}) =>{
return (
    <li>
        <LinkTranding to={`/movies/${id}`}>{original_title}</LinkTranding>
    </li>
)
}