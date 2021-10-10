import React from "react"
import Navigation from "./Navigation"


class CTHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <title>Location App with React</title>
        </header>
        <Navigation />
      </React.Fragment>
    );
  }
}

export default CTHeader
