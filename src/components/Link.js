import useNavigation from "../Hooks/NavigationHook";

function Link({to, children}) {
    const {currentPath, navigate} = useNavigation();

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