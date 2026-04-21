import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
 <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={
                <Suspense fallback={<div>loading...</div>}>
                    <MainPageAsync />
                </Suspense>
            } />
            <Route path="/about" element={
                <Suspense fallback={<div>loading...</div>}>
                    <AboutPageAsync />
                </Suspense>
            } />
        </Route>
    </Routes>
 </BrowserRouter>
)
