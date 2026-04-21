import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { MainPage } from "./pages/MainPage/MainPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
 </BrowserRouter>
)
