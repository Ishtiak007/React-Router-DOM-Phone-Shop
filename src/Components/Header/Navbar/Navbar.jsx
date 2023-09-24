import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-6 px-5 rounded-md shadow-xl">
                <Logo></Logo>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favourite"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            Favourite
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }>
                            LogIn
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;