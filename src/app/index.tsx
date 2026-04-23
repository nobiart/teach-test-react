import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "app/providers/ThemeProvider";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
 <BrowserRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
 </BrowserRouter>
)
