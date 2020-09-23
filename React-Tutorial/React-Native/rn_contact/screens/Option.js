import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons';
import DetailListItem from '../components/DetailListItem';

export default class Options extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <DetailListItem title="Update Profile" /> 
                <DetailListItem title="Change Language" /> 
                <DetailListItem title="Sign Out" />
            </View>
        )
    }
}


const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'white', 
    },
});