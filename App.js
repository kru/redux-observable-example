import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import MainScreen from './src/containers/MainScreen';

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <MainScreen />
            </Provider>
        );
    }
}
