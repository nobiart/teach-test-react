import { NavLink } from "react-router";
import { Counter } from "./components/Counter";
import "./index.scss";

export default function App() {
    return (
        <div className="app">
            Hello, World!
            <Counter />
            <NavLink to="/about">About</NavLink>
        </div>
    )
}
