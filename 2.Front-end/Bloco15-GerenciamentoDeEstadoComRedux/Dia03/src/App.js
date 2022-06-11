import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Customers from './pages/Customers';
import Register from './pages/Register';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/customers' component={Customers} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
