import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/contact", name: "Contact" }
      ];
      
    return (
        <nav className=" pl-5 bg-gray-500 mt-7">
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
                {
                    open === true ? <RxCross2></RxCross2> : <RiMenu2Line></RiMenu2Line>
                }
            </div>
            <ul className={`
                md:flex absolute bg-black text-white duration-1000 md:static
                ${open ? 'top-16' : '-top-60'}
                `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;