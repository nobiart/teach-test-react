import { NavLink, Outlet } from "react-router";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            Hello, World!
            <button onClick={toggleTheme}>Change theme</button>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/about">About</NavLink>
            <AppRouter />
            <Outlet />
        </div>
    )
}
