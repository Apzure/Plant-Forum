import { Link } from "react-router-dom";
import {BiSearchAlt} from "react-icons/bi";

function Navbar() {
    const LinkCss = "px-3 py-2.5 text-center hover:bg-green-600" // Not sure why it is py-2.5 for it be the same as py-2 below
    return (
        <div className="flex place-content-between bg-green-500 py-2">
            <div>
                <Link to='/' className={LinkCss} >
                    Home
                </Link>
                <Link to='Members' className={LinkCss} >
                    Members
                </Link>
            </div>
            <div>
                <Link to='Login'  className={LinkCss}>
                    Login
                </Link>
                <Link to='Register' className={LinkCss} >
                    Register
                </Link>
                <Link to='search' className={LinkCss}>
                    <BiSearchAlt className='inline mb-1'/> Search
                </Link>
            </div>
        </div>
    );  // Will consider adding a search text box in Search, with another option to link for advanced search
}

export default Navbar;