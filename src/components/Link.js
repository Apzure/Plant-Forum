import { useContext } from "react";
import { NavigationContext } from "../context/Navigation";

function Link({to, children}) {
    const {currentPath, navigate} = useContext(NavigationContext);

    const handleClick = event => {
        if (event.metaKey || event.ctrlKey) {
            return;
          }

        event.preventDefault();
        navigate(to)
    };

    return (
        <a onClick = {handleClick} href = {to} style = {{ color: "#0000AA"}}> 
            {children} 
        </a>
    )
}

export default Link