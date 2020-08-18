
import React from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
import TimerButton from './TimerButton'

export default function TimerForm({
    id,
    title,
    project
}) {
    const submitText = id ? 'Update' : 'Create';
    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>{title}</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={title}
                    />
                </View>
            </View>

            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>{project}</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        defaultValue={title}
                    />
                </View>
            </View>

            <View style = { styles.bottonGroup } >
                <TimerButton small color = '#21BA45' title={submitText}/>
                <TimerButton small color = '#DB2828' title='Cancel'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor:'white',
        borderColor:'#D6D7DA',
        borderWidth:2,
        borderRadius:10,
        padding:15,
        margin:15,
        marginBottom:0,
    },

    attributeContainer: {
        marginVertical:8
    },

    textInputTitle: {
        fontSize: 14, 
        fontWeight: 'bold', 
        marginBottom: 5,
    },

    textInputContainer: {
        borderColor: '#D6D7DA', 
        borderRadius: 2, 
        borderWidth: 1, 
        marginBottom: 5,
    },

    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },

    bottonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})