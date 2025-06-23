import { Link, NavLink } from "react-router-dom"
import s from './button.module.scss'
import clsx from "clsx";

type Button = {
    to: string;
    children: React.ReactNode;
}
export const Button = ({to, children}: Button) => {
    return (
        <NavLink 
            to={to} 
            className={({ isActive }) => 
            isActive ? clsx(s.button, s.active) : s.button}
        >
            {children}
        </NavLink>
    )
}