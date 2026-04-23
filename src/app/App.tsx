import { Outlet } from "react-router";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

export default function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            Hello, World!
            <ThemeSwitcher />
            <Navbar />
            <AppRouter />
            <Outlet />
        </div>
    )
}
