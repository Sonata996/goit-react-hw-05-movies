import { BiArrowBack } from "react-icons/bi";
import { ConteinerGoBack } from "./GoBack.styled";

export const GoBack = (props) =>{
    const {location} = props
return (
    <div>
    <ConteinerGoBack to={location.state ? location.state.from :'/'} >
        <BiArrowBack />
            <p>Go back</p>
        </ConteinerGoBack>
                
    </div>
)
}