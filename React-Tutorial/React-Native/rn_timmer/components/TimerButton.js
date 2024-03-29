import React from 'react';
import {ColorPropType, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default function TimerButton({
    color,
    title,
    onPress,
    small
}) {
    return (
        <TouchableOpacity 
            style={[
                styles.button,
                {borderColor:color}
            ]}
            onPress = {onPress}>
        <Text
            style = {[
                styles.buttonText,
                small ? styles.small : styles.large,
                {color},
            ]}>
        {title}
        </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop:10,
        minWidth:100,
        borderWidth:2,
        borderRadius:3,
        padding:5,
    },

    buttonText: {
        textAlign:'center',
        fontWeight:'bold'
    },
    
    small:{
        fontSize:14,
        padding:5
    },

    large:{
        fontSize:16,
        padding:10
    },

    title:{
        fontSize:14,
        fontWeight: 'bold'
    },

    elapseTime:{
        fontSize: 18, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        paddingVertical: 10,
    }
})

TimerButton.propTypes = {
    color: ColorPropType.isRequired, 
    title: PropTypes.string.isRequired, 
    small: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
};

TimerButton.defaultProps = {
    //由于small是非必须的所以要指定默认值
    small:false,
}