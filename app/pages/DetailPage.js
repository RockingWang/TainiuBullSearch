import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

export default class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navTitle: ''
        }
        this.bullData = this.props.navigation.state.params.bullData;
    }


    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.bullData.Name,
        headerStyle: {
            backgroundColor: '#0F71A7'
        },
        headerTintColor: 'white'
    });

    render() {
        var aAa = '';
        var DMS = '';
        if (this.bullData.aAa !== '') {
            aAa = ' | ' + this.bullData.aAa;
        }
        if (this.bullData.DMS !== '') {
            DMS = ' | ' + this.bullData.DMS;
        }
        return <ScrollView style={styles.container}>
            <Image/>
            <View style={styles.cell}>
                <View style={styles.leftBox}>
                    <Text style={styles.title}>{this.bullData.Name}</Text>
                    <Text style={styles.name}>{this.bullData.Pedigree}</Text>
                    <Text style={styles.code}>{this.bullData['NAAB Code']}</Text>
                    <Text
                        style={styles.identification}>{this.bullData.Identification + aAa + DMS}</Text>
                </View>
                <View style={styles.rightBox}>
                    <View style={styles.tpi}>
                        <Text style={styles.rightTitle}>TPI</Text>
                        <Text style={styles.rightDesc}>{this.bullData.TPI}</Text>
                    </View>
                    <View style={styles.nms}>
                        <Text style={styles.rightTitle}>NM$</Text>
                        <Text style={styles.rightDesc}>{this.bullData.NM$}</Text>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text>Production</Text>
                    <Text>^</Text>
                </View>
                <View>
                    <Text>Milk</Text>
                    <Text>2753</Text>
                </View>
                <View>
                    <Text>Protein</Text>
                    <Text>81</Text>
                </View>
                <View>
                    <Text>Fat</Text>
                    <Text>105</Text>
                </View>
                <View>
                    <Text>Cheese Merit</Text>
                    <Text>801</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Health Traits</Text>
                    <Text>^</Text>
                </View>
                <View>
                    <Text>Productive Life</Text>
                    <Text>4.0</Text>
                </View>
                <View>
                    <Text>Daughter Pregnancy Rate</Text>
                    <Text>-1.5</Text>
                </View>
                <View>
                    <Text>Somatic CellScore</Text>
                    <Text>3.06</Text>
                </View>
                <View>
                    <Text>Cow Conception Rate</Text>
                    <Text>-0.7</Text>
                </View>
                <View>
                    <Text>Heifer Conception Rate</Text>
                    <Text>0.4</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Calving Traits</Text>
                    <Text>^</Text>
                </View>
                <View>
                    <Text>Sire Calving Ease</Text>
                    <Text>5.9</Text>
                </View>
                <View>
                    <Text>Daughter Calving Ease</Text>
                    <Text>4.4</Text>
                </View>
                <View>
                    <Text>Sire Stillbirth</Text>
                    <Text>6.7</Text>
                </View>
                <View>
                    <Text>Daughter Stillbirth</Text>
                    <Text>6.2</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text>Conformation</Text>
                    <Text>^</Text>
                </View>
                <View>
                    <Text>PTAT</Text>
                    <Text>1.47</Text>
                </View>
                <View>
                    <Text>UDC</Text>
                    <Text>0.97</Text>
                </View>
                <View>
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
    }
});