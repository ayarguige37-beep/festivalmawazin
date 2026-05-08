import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
        <ul className=" flex gap-50 justify-center bg-amber-300">
            <li className=" hover:text-amber-200">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className=" hover:text-amber-200">
                <NavLink to="/Passeport">Passeport</NavLink>
            </li>
            <li className=" hover:text-amber-200">
                <NavLink to="/programme">Programme</NavLink>
            </li>
            <li className=" hover:text-amber-200"> 
                <NavLink to="/Planning">Planning</NavLink>
            </li>
        </ul>
    </nav>
  );
};
