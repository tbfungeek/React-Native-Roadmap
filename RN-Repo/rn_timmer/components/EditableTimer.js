import React from 'react';
import {View,StyleSheet} from 'react-native';
import Timer from './Timer';
import TimerForm from './TimerForm';

export default class EditableTimer extends React.Component {

    state = {
        editFormOpen:false
    }

    render() {
        
        const {editFormOpen} = this.state
        const {id,title,project,elapsed,isRunning} = this.props

        if (editFormOpen) {
                return (
                    <TimerForm
                        id={id}
                        title={title}
                        project={project}/>
                )     
            } else {
                return (
                    <Timer
                        id={id}
                        title={title}
                        project={project}
                        elapsed={elapsed}
                        isRunning={isRunning}/>
                )
            }
    }
}