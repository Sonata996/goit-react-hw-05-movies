import { LinkList, ListAdditional } from "./AdditionalInfo.styled"


export const ListAdditionalInfo = ({location}) =>{
    return(
        <ListAdditional>
            <li>
            <LinkList to="cast" state={location.state}>
                Cast
              </LinkList> 
            </li>
             <li>
                <LinkList to="reviews" state={location.state}>
                Reviews
              </LinkList>
             </li>
        </ListAdditional>
    )
}