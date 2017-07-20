import React from 'react';
import {
    View,
    Text,
    ListView,
    StyleSheet
} from 'react-native';
import BullDataRepository from '../common/BullDataRepository'

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.bullDataRepository = new BullDataRepository();
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    }

    componentDidMount() {
        this.bullDataRepository.fetch()
            .then(data => this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data)
            }))
            .catch(error => this.setState({
                dataSource: this.state.dataSource.cloneWithRows(error)
            }));
    }

    renderRow(rowData, sectionID, rowID, highlightRow) {
        // backgroundColor: '#F1F4F8'
        // console.log(rowData.aAa===null);
        if (rowID % 2 === 0) {
            var backgroundStyle = {backgroundColor: 'white'}
        } else {
            var backgroundStyle = {backgroundColor: '#F1F4F8'}
        }
        var aAa = '';
        var DMS = '';
        if (rowData.aAa !== '') {
            aAa = ' | ' + rowData.aAa;
        }
        if (rowData.DMS !== '') {
            DMS = ' | ' + rowData.DMS;
        }
        return <View style={[styles.cell, backgroundStyle]}>
            <View style={styles.leftBox}>
                <Text style={styles.title}>{rowData.Name}</Text>
                <Text style={styles.name}>{rowData.Pedigree}</Text>
                <Text style={styles.code}>{rowData['NAAB Code']}</Text>
                <Text
                    style={styles.identification}>{rowData.Identification + aAa + DMS}</Text>
            </View>
            <View style={styles.rightBox}>
                <View style={styles.tpi}>
                    <Text style={styles.rightTitle}>TPI</Text>
                    <Text style={styles.rightDesc}>2916</Text>
                </View>
                <View style={styles.nms}>
                    <Text style={styles.rightTitle}>NM$</Text>
                    <Text style={styles.rightDesc}>959</Text>
                </View>
            </View>
        </View>
    }

    static navigationOptions = {
        title: 'Search results',
        headerStyle: {
            backgroundColor: '#0F71A7'
        },
        headerTintColor: 'white'
    };

    render() {
        return <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID, highlightRow) => this.renderRow(rowData, sectionID, rowID, highlightRow)}
        />
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