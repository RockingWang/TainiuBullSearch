import React from 'react';
import {
    Text,
} from 'react-native';

export default class SearchPage extends React.Component {

    static navigationOptions = {
        title: 'Search results',
        headerStyle: {
            backgroundColor: '#0F71A7'
        },
        headerTintColor: 'white'
    };

    render() {
        return <Text>Hello, SearchPage!</Text>
    }
}