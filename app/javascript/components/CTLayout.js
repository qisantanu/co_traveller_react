import React from "react"
import CTHeader from "./CTHeader"
import CTFooter from "./CTFooter"

const CTLayout = ({ children }) => {

  return (
    <React.Fragment>
      <CTHeader />
      <main>{children}</main>
      <CTFooter />
    </React.Fragment>
  );

}

export default CTLayout
