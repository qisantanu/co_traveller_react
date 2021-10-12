import React from "react"
import Location from "../components/Location";
import HelloWorld from "../components/HelloWorld";
import SetDestination from "./SetDestination";
import DestinationList from "./DestinationList";

import CTLayout from "./CTLayout";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./../stylesheets/App.css";
import { Provider } from "react-redux";
import store from "../reducer/app_store";

//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <CTLayout>
              <Switch>
                <Route exact path="/" component={HelloWorld} />
                <Route exact path="/location" component={Location} />
                <Route exact path="/add_destination" component={SetDestination} />
                <Route exact path="/destinations" component={DestinationList} />
              </Switch>
            </CTLayout>
          </div>

        </Provider>


      </BrowserRouter>
    )
  }
}

export default App;