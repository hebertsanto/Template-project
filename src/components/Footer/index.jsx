import React from "react"
import { Footer } from "./styled"

export const FooterComponent = ({changeContent}) => {
   return(
      <Footer>
            <h2>{changeContent}</h2>
      </Footer>
   )
}