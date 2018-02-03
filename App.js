import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import MainScreen from './src/containers/MainScreen';
import SearchScreen from './src/containers/SearchScreen';

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <SearchScreen />
            </Provider>
        );
    }
}
