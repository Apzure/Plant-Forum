import { useContext } from "react";
import { NavigationContext } from "../context/Navigation";


const useNavigation = () => useContext(NavigationContext);

export default useNavigation;