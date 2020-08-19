
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import TimerButton from '../components/TimerButton'

import {millisecondsToHuman} from '../utils/TimeUtils'

export default function Timer({
    id,
    title,
    project,
    elapsed,
    isRunning
}) {

    const elapsedString = millisecondsToHuman(elapsed);
    
    return (
        <View  style={styles.timerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.project}>{project}</Text>
            <Text style={styles.elapsedTimer}>{elapsedString}</Text>
            <View style={styles.bottonGroup}>
                <TimerButton color='blue' small title = "Edit"/>
                <TimerButton color='blue' small title = "Remove"/>
            </View>
            <TimerButton color="#21BA45" title = "Start"/>
        </View>
    )
}

const styles = StyleSheet.create({
    timerContainer:{
        backgroundColor :'white',
        borderColor : '#d6d7da',
        borderWidth : 2,
        borderRadius : 10,
        padding:15,
        margin:15,
        marginBottom:0,
    },

    title: {
        fontSize:16,
        fontWeight:'bold'
    },

    project: {
        fontSize:14,
        marginVertical:6,
    },

    elapsedTimer:{
        fontSize:26,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:6,
    },

    bottonGroup:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:6
    }
})