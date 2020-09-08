import {Constants} from 'expo-constants';
import {Platform,StyleSheet,View} from 'react-native';
import PropTypes from 'prop-types'; 
import React from 'react';
import { extend } from 'dayjs';

export default class MeasureLayout extends React.Component {

    static propTypes = {
        children: PropTypes.func.isRequired, 
    };

    state = {
        layout:null
    };

    handleLayout = () => {

    }

    render() {
        const { children } = this.props;
        const { layout } = this.state;

        if (!layout) {
            return <View onLayout = {this.handleLayout} style = {styles.container}/>
        }
        return children(layout);
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});