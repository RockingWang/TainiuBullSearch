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
            countDown: 3
        }
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.interval = setInterval(() => {
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
        this.timer = setTimeout(() => {
            this.props.navigation && this.props.navigation.dispatch(resetAction);
        }, 3000);
    }

    componentWillUnmount(){
        this.interval && clearInterval(this.interval);
        this.timer && clearTimeout(this.timer);
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
