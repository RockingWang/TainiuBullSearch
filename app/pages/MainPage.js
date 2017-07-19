import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class MainPage extends React.Component {
    static navigationOptions = {
        title: 'Alta Bull Search',
        headerStyle: {
            backgroundColor: '#0F71A7'
        },
        headerTintColor: 'white',
        headerRight: <Image style={{marginRight: 10}} source={require('../../res/images/breadcrumb.png')}/>
    };

    render() {
        return <View style={styles.container}>
            <Image style={{flex: 1}} source={require('../../res/images/background.png')}/>
            <View style={styles.searchBox}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <TextInput
                        style={{flex: 1, height: 30, marginLeft:5,lineHeight:30, backgroundColor: 'white' }}
                        underlineColorAndroid="transparent"
                        placeHolde="Type here to translate!"
                        defaultValue="Type here to translate!">
            </TextInput>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Search')}
                    style={{backgroundColor: '#DCA024', width: 30, height: 30, margin: 5}}>
                    <Text style={{lineHeight: 30, textAlign: 'center'}}>🐂</Text>
                </TouchableOpacity>
            </View>
            </View>
            <Text style={styles.tips}>Or select by:</Text>
            <View style={styles.presetBox}>
                <TouchableOpacity>
                    <Text style={[styles.tips, styles.presetBtn]}>Preset Breeding Goals</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'stretch',
        justifyContent: 'flex-end'
    },
    searchBox: {
        margin: 20,
        height: 40,
        backgroundColor: 'white'
    },
    tips: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    presetBox: {
        marginBottom: 40,
        marginTop: 10,
        alignItems: 'center'
    },
    presetBtn: {
        backgroundColor: '#DCA024',
        width: 200,
        height: 50,
        borderRadius: 5,
        lineHeight: 35,
        textAlign: 'center',
        overflow: 'hidden'
    }
});