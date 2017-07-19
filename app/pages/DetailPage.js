import React from 'react';
import {
    Text
} from 'react-native';

export default class DetailPage extends React.Component {
    static navigationOptions = {
        title: 'DetailPage'
    };

    render() {
        return <Text>Hello, DetailPage!</Text>
    }
}