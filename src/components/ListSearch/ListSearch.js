import { Link } from "react-router-dom"




export const ListSearch = ({searchValue,location}) =>{
    return(
        <ul>
          {searchValue.results.map(elem => 
          <li key={elem.id}>
            <Link to={`${elem.id}`} 
            state={{from:location}}>{elem.title}
            </Link>
          </li>
          )}
          </ul>
    )
}