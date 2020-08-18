import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

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