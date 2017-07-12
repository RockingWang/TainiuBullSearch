/**
 * Created by leechee on 2017-07-11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation'

export default class TainiuBullSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <TextInput style={styles.searchInput} placeholder={"Search by Bull code, name, reg"}/>
                    <Button style={styles.searchBtn} title="Search"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    searchBox: {
        height: 60,
        width: 270,
        backgroundColor: 'white',
        borderRadius:5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'green',
    },
    searchBtn: {
        width: 20,
        backgroundColor: 'red',
        margin: 5,
    }
});

AppRegistry.registerComponent('TainiuBullSearch', () => TainiuBullSearch);
