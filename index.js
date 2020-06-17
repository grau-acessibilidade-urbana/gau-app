import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import App from './src/App.js';
import storeConfig from './src/store/storeConfig';

const store = storeConfig();
const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
