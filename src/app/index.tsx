import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import { Suspense } from "react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
 <BrowserRouter>
    <ThemeProvider>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={
                    <Suspense fallback={<div>loading...</div>}>
                        <MainPage />
                    </Suspense>
                } />
                <Route path="/about" element={
                    <Suspense fallback={<div>loading...</div>}>
                        <AboutPage />
                    </Suspense>
                } />
            </Route>
        </Routes>
    </ThemeProvider>
 </BrowserRouter>
)
