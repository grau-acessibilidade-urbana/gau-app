import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import Navigator from './src/Navigator.js';
import storeConfig from './src/store/storeConfig';

const store = storeConfig();
const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
