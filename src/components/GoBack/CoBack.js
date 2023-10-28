import { BiArrowBack } from "react-icons/bi";
import { ConteinerGoBack } from "./GoBack.styled";
import { useLocation } from "react-router-dom";

export const GoBack = (props) =>{
    const location1 = useLocation();
    const {location} = props
return (
    <div>
    <ConteinerGoBack state={location1} to={location.state ? location.state.from :'/'} >
        <BiArrowBack/>
            <p>Go back</p>
        </ConteinerGoBack>
                
    </div>
)
}