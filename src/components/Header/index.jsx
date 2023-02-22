import React from "react";
import { HeaderStyle } from "./styled";

export const HeaderComponent = ({logo}) => {
    return(
          <HeaderStyle>
               <h2>{logo}</h2>
          </HeaderStyle>
    )
}