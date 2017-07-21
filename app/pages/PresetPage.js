import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class DetailPage extends React.Component {
    constructor(props) {
        super(props);
    }


    static navigationOptions = ({navigation}) => ({
        title: '啦啦啦',
        headerStyle: {
            backgroundColor: '#0F71A7'
        },
        headerTintColor: 'white'
    });

    render() {
        return <ScrollView style={styles.container}>
            <View style={styles.detailBox}>
                <View style={styles.line}>
                    <Text style={styles.lineLeft}>Production</Text>
                    <Text style={styles.lineRight}>^</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.lineLeft}>Milk</Text>
                    <Text style={styles.lineRight}>2753</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.lineLeft}>Protein</Text>
                    <Text style={styles.lineRight}>81</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.lineLeft}>Fat</Text>
                    <Text style={styles.lineRight}>105</Text>
                </View>
                <View style={styles.line}>
                    <Text style={styles.lineLeft}>Cheese Merit</Text>
                    <Text style={styles.lineRight}>801</Text>
                </View>
            </View>
            <View style={styles.detailBox}>
                <View style={styles.line}>
                    <Text>Health Traits</Text>
                    <Text>^</Text>
                </View>
                <View style={styles.line}>
                    <Text>Productive Life</Text>
                    <Text>4.0</Text>
                </View>
                <View style={styles.line}>
                    <Text>Daughter Pregnancy Rate</Text>
                    <Text>-1.5</Text>
                </View>
                <View style={styles.line}>
                    <Text>Somatic CellScore</Text>
                    <Text>3.06</Text>
                </View>
                <View style={styles.line}>
                    <Text>Cow Conception Rate</Text>
                    <Text>-0.7</Text>
                </View>
                <View style={styles.line}>
                    <Text>Heifer Conception Rate</Text>
                    <Text>0.4</Text>
                </View>
            </View>
            <View style={styles.detailBox}>
                <View style={styles.line}>
                    <Text>Calving Traits</Text>
                    <Text>^</Text>
                </View>
                <View style={styles.line}>
                    <Text>Sire Calving Ease</Text>
                    <Text>5.9</Text>
                </View>
                <View style={styles.line}>
                    <Text>Daughter Calving Ease</Text>
                    <Text>4.4</Text>
                </View>
                <View style={styles.line}>
                    <Text>Sire Stillbirth</Text>
                    <Text>6.7</Text>
                </View>
                <View style={styles.line}>
                    <Text>Daughter Stillbirth</Text>
                    <Text>6.2</Text>
                </View>
            </View>
            <View style={styles.detailBox}>
                <View style={styles.line}>
                    <Text>Conformation</Text>
                    <Text>^</Text>
                </View>
                <View style={styles.line}>
                    <Text>PTAT</Text>
                    <Text>1.47</Text>
                </View>
                <View style={styles.line}>
                    <Text>UDC</Text>
                    <Text>0.97</Text>
                </View>
                <View style={styles.line}>
                    <Text>FLC</Text>
                    <Text>1.06</Text>
                </View>
            </View>
        </ScrollView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cell: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    leftBox: {
        flex: 1
    },
    title: {
        height: 19,
        color: '#264A85',
        fontWeight: 'bold',
        fontSize: 17
    },
    name: {
        height: 19,
        color: '#264A85',
        fontSize: 15
    },
    code: {
        height: 19,
        color: '#0070A9',
        fontSize: 12
    },
    identification: {
        marginTop: 4,
        color: '#4A4A4A',
        fontSize: 15
    },
    rightBox: {
        width: 100,
        height: 60
    },
    tpi: {
        flex: 1,
        backgroundColor: '#264A85',
        flexDirection: 'row',
        borderTopLeftRadius: 5,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    nms: {
        flex: 1,
        backgroundColor: '#0070A9',
        flexDirection: 'row',
        borderBottomLeftRadius: 5,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rightTitle: {
        flex: 1,
        marginLeft: 10,
        color: 'white'
    },
    rightDesc: {
        width: 40,
        color: 'white',
        fontWeight: 'bold'
    },
    // 新增
    detailBox:{
        padding: 20
    },
    line: {
        flexDirection: 'row'
    }
});