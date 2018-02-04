import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';

const Routes = ({ stores }) => {
  return (
    <Provider {...stores}>
      <Router>
        <Route exact path='/' component={App} />
      </Router>
    </Provider>
  )
}

export default Routes;
