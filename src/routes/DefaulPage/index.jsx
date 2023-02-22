import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/Header";
import { FooterComponent } from "../../components/Footer";


export const DefaultPageComponent = () => {
    return(
        <div>
            <HeaderComponent 
            logo="header"
            />
            <Outlet />
            <FooterComponent
             changeContent="this is the main footer"
             />
        </div>
    ) 
}