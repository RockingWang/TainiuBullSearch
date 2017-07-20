import React from 'react';
import {
    Text,
} from 'react-native';
import bulldata from '../../res/data/bulldata.json';

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Search results',
        headerStyle: {
            backgroundColor: '#0F71A7'
        },
        headerTintColor: 'white'
    };

    render() {
        return <Text>{JSON.strgit ingify(bulldata[0])}</Text>
    }
}