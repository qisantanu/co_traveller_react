import React from "react"

class CTFooter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer font-small blue">
          <div className="container-fluid text-center text-md-left">
            <p className="text-uppercase">Built for practicing purpose only</p>
          </div>
          <div className="footer-copyright text-center py-3">
            Copyright © 2021 Powered by Santanu Bhattacharya
          </div>

        </footer>
      </React.Fragment>
    );
  }
}

export default CTFooter
