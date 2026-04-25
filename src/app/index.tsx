import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "app/providers/ThemeProvider";
import App from "./App";

import "shared/config/i18n/i18n";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
 <BrowserRouter>
    <ThemeProvider>
        <App />
    </ThemeProvider>
 </BrowserRouter>
)
