import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./pages/Layout";
document.addEventListener("DOMContentLoaded", () => {    
    const container = document.getElementById('root');    
    if (!container) {        
        throw new Error('No se encontró el elemento con id "app"');    
    }    
    const root = createRoot(container); 
    root.render(<Layout />);});
