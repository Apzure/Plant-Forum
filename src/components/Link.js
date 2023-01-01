import useNavigation from "../Hooks/NavigationHook";

function Link({to, children}) {
    const {currentPath, navigate} = useNavigation();

    const handleClick = event => {
        if (event.metaKey || event.ctrlKey) {
            return;
          }

        event.preventDefault();
        navigate(to);
    };

    return (
        <a onClick = {handleClick} href = {to} className="text-blue-600/100"> 
            {children} 
        </a>
    )
}

export default Link;