import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {
    NavigationActions
} from 'react-navigation';

export default class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countDown: 5
        }
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                countDown: this.state.countDown - 1
            })
        }, 1000);
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Main'
                })
            ]
        });
        setTimeout(() => {
            this.props.navigation && this.props.navigation.dispatch(resetAction);
        }, 2000);
    }

    render() {
        return <View style={styles.container}>
            <Text>欢迎光临！{this.state.countDown}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
