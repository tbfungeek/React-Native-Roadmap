import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import PropTypes from 'prop-types';

export default class NavigationBar extends React.Component {
    
    static propTypes= {

    };

    static defaultProps= { 

    };
    
    render() {

        const {title,leftText,onPressLeftText} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPressLeftText} style={styles.leftText}>
                    <Text>{leftText}</Text>
                </TouchableOpacity>
                <Text style = {styles.title}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    leftText: {
        position: 'absolute',
        left:20,
        justifyContent:"center"
    },

    title: {
        fontWeight: '500',
    }
})