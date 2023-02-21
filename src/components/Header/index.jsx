import React, { Children } from "react";

export const HeaderComponent = ({logo, Links}) => {
    return(
          <header>
               <h2>{logo}</h2>
          </header>
    )
}