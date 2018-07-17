import React, { Component } from 'react';
import {renderRoutes} from 'react-router-config';
import {routes} from './routes/routes'
import Header from './common/header/headerview';

class App extends Component {
  render() {
    const {store , history} = this.props;
    return (
      <div>
        <Header store={store} history={history}/>
        {renderRoutes(routes)}
      </div>
    );
  }
}

export default App;
