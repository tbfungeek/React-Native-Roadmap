
import React from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
import TimerButton from './TimerButton';
import PropTypes from 'prop-types';

export default class TimerForm extends React.Component {

    static propTypes= {
        id: PropTypes.number,
        title: PropTypes.string,
        project: PropTypes.string,
        onSubmitTimmer: PropTypes.func.isRequired,
        onCloseTimer: PropTypes.func.isRequired,
    }

    static defaultProps = { 
        id: 0,
        title: '',
        project: '',
    };
    constructor(props) {
        super(props);

        const {id, title, project} = props;

        this.state = {
            title: id ? title : 'Title',
            project: id ? project: 'Project',
        };
    }

    handleTitleChange = (title) => {
        this.setState({title})
    };

    handleProjectChange = (project) => {
        this.setState({project})
    };

    handleSubmitTimer = () => {

        const {id,onSubmitTimmer} = this.props;
        const {title,project} = this.state;

        if (!onSubmitTimmer) return;

        onSubmitTimmer({
            id:id,
            title:title ? title:"Title",
            project:project ? project:"Project",
        })
    };

    handleCloseTimer = () => {
        const {onCloseTimer} = this.props;

        if (!onCloseTimer) return;

        onCloseTimer()
    };

    render() {

        const {title, project} = this.state;
        const {id} = this.props;
        const submitText = id ? "Update":"Create";

        return (
            <View style={styles.formContainer}>
                <View style={styles.attributeContainer}>
                    <Text style={styles.textInputTitle}>{title}</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            value= {title}
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            onChangeText = {this.handleTitleChange}
                        />
                    </View>
                </View>
    
                <View style={styles.attributeContainer}>
                    <Text style={styles.textInputTitle}>{project}</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            value= {project}
                            onChangeText = {this.handleProjectChange}
                        />
                    </View>
                </View>
    
                <View style = { styles.bottonGroup } >
                    <TimerButton small color = '#21BA45' title={submitText} onPress = {this.handleSubmitTimer}/>
                    <TimerButton small color = '#DB2828' title='Cancel' onPress = {this.handleCloseTimer}/>
                </View>
            </View>
        )
    }
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