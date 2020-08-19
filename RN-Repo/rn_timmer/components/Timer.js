
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import TimerButton from '../components/TimerButton';
import PropTypes from 'prop-types';

import {millisecondsToHuman} from '../utils/TimeUtils'


export default class Timer extends React.Component {

    static propTypes= {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        project: PropTypes.string.isRequired,
        elapsed: PropTypes.number.isRequired,
        isRunning: PropTypes.bool.isRequired,
        onEditPress: PropTypes.func.isRequired,
        onRemovePress: PropTypes.func.isRequired,
        onStartPress: PropTypes.func.isRequired,
        onStopPress: PropTypes.func.isRequired,
    }

    handleEdit = () => {
        const {onEditPress} = this.props;
        if (!onEditPress) return;
        onEditPress()
    }
    
    handleRemove = () => {
        const {id,onRemovePress} = this.props;
        if (!onRemovePress) return;
        onRemovePress(id)
    }

    handleStartPress = () => {
        const {id, onStartPress} = this.props;
        if (!onStartPress) return;
        onStartPress(id)
    }

    handleEndPress = () => {
        const {id, onStopPress} = this.props;
        if (!onStopPress) return;
        onStopPress(id)
    }

    renderActionButton () {
        const {isRunning} = this.props;
        if (!isRunning) {
            return <TimerButton color="#21BA45" title = "Start" onPress = {this.handleStartPress}/>
        }
        return <TimerButton color="#DB2828" title = "Stop" onPress = {this.handleEndPress}/>
    }
    render() {
        const{id,title,project,elapsed, isRunning} = this.props;
        const elapsedString = millisecondsToHuman(elapsed);

        return (
            <View style={styles.timerContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.project}>{project}</Text>
                <Text style={styles.elapsedTimer}>{elapsedString}</Text>
                <View style={styles.bottonGroup}>
                    <TimerButton color='blue' small title = "Edit" onPress={this.handleEdit}/>
                    <TimerButton color='blue' small title = "Remove" onPress= {this.handleRemove}/>
                </View>
                {this.renderActionButton()}
            </View>
        )
    }
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