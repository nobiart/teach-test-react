import { NavLink, Outlet } from "react-router";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            Hello, World!
            <Counter />
            <button onClick={toggleTheme}>Change theme</button>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/about">About</NavLink>
            <Outlet />
        </div>
    )
}
