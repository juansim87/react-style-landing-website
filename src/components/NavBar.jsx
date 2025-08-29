import { NavLink } from "react-router-dom";

const navLinkMenu = ["Exercises", "Trainers", "Pricing", "LogIn"];

export const NavBar = () => {

    const navLink = "uppercase font-normal opacity-67 text-xs tracking-[1.5px]";

    
  return (
    <nav className="flex justify-between mb-40">
      <p className="uppercase font-semibold text-lg tracking-[1px]">Workout</p>
      <div className="flex gap-10">
      {navLinkMenu.map((link, index) => (
        <NavLink key={index} className={navLink}>{link}</NavLink>
      ))}
      </div>
    </nav>
  );
};