import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/Header";
import { FooterComponent } from "../../components/Footer";


export const DefaultPageComponent = () => {
    return(
        <div>
            <HeaderComponent 
            logo="this is the main page header"
            >
            </HeaderComponent>
            <Outlet />
            <FooterComponent
             changeContent="this is the main page header"
             />
        </div>
    ) 
}