import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }){
    const [currentPath, setPath] = useState(window.location.pathname)

    useEffect(() => {
        const handlePopstate = () => {
          setPath(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopstate);
    
        return () => {
          window.removeEventListener('popstate', handlePopstate);
        };
      }, []);

    function navigate(to) {
        window.history.pushState({}, '', to);
        setPath(to);
    }

    return (
    <NavigationContext.Provider value = {{navigate, currentPath}}>
        { children }
    </NavigationContext.Provider>
    )
}

export { NavigationContext };
export default NavigationProvider;