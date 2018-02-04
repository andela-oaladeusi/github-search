import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import Routes from './routes';
import Store from './store';
import { setAxiosDefault } from './utils';
import './css/index.css';
import registerServiceWorker from './registerServiceWorker';

useStrict(true);

setAxiosDefault();

Store.initilize();
const stores = Store.getAll();


ReactDOM.render((<Routes stores={stores} />
), document.getElementById('root'));
registerServiceWorker();
