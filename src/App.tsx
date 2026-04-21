import { NavLink, Outlet } from "react-router";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            Hello, World!
            <Counter />
            <button onClick={toggleTheme}>Change theme</button>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/about">About</NavLink>
            <Outlet />
        </div>
    )
}
