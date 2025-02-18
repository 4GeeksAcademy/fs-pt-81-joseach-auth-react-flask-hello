import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import { Home } from "../pages/Home";
import { Demo } from "../pages/Demo";
import { Single } from "../pages/Single";
import injectContext from "../store/appContext";
import { BackendURL } from "../components/backendURL";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Signin } from "../pages/signing";
import { Register } from "../pages/register";
import { LoginSuccess } from "../pages/loginSuccess";
import { Private } from "./private";


const Layout = () => {
    // Verifica si la URL del backend está definida
    if (!import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_BACKEND_URL === "") {
        return <BackendURL />;
    }

    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="/signing" element={<Signin />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/private" element={<Private/>} />
                        
                        {/* Ruta protegida con ProtectedRoute */}
                        <Route
                            path="/loginsuccess"
                            element={
                                
                                    <LoginSuccess />
                                
                            }
                        />
                        
                        {/* Ruta para página no encontrada */}
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);