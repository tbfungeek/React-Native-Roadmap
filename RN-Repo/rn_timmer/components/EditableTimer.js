import React from 'react';
import {View,StyleSheet} from 'react-native';
import Timer from './Timer';
import TimerForm from './TimerForm';

export default function EditableTimer(
    {
        id,
        title,
        project,
        elapsed,
        isRunning,
        editFormOpen
    }) 
{
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

const styles = StyleSheet.create({

})