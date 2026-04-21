import { NavLink, Outlet } from "react-router";
import { Counter } from "./components/Counter";
import "./index.scss";

export default function App() {
    return (
        <div className="app">
            Hello, World!
            <Counter />
            <NavLink to="/">Main</NavLink>
            <NavLink to="/about">About</NavLink>
            <Outlet />
        </div>
    )
}
