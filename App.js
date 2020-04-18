import React from 'react';
import { Provider} from 'react-redux'
import configureStore from './src/Store/configureStore'
import ParentClass from './src/main/ParentClass'
const store = configureStore();

 export  default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <ParentClass/>
            </Provider>
        )
    }
}