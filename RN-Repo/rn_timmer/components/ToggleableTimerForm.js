import React from 'react'
import {View,StyleSheet} from 'react-native'

import TimerButton from './TimerButton'
import TimerForm from './TimerForm'

export default class ToggleableTimerForm extends React.Component {
    state = {
        isOpen:false
    };
    
    render() {
        const {isOpen} = this.state
        return (
            <View style = {[styles.constainer, !isOpen && styles.buttonPadding]}>
                {isOpen ? <TimerForm/>:<TimerButton title="+" color="black" onPress={this.handleFormOpen}/>}
            </View>
        );
    }

    handleFormOpen = () => {
        this.setState({isOpen:true});
    };
}

const styles = StyleSheet.create({
    constainer:{
        paddingVertical:10,
    },
    buttonPadding:{
        paddingHorizontal:15,
    }
})