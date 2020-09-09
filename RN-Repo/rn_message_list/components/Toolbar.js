import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
}
from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends React.Component {

    static propTypes = {
        isFocused:PropTypes.bool.isRequired,
        onChangeFocus:PropTypes.func,
        onSubmit:PropTypes.func,
        onPressCamera:PropTypes.func,
        onPressLocation:PropTypes.func,
    };

    static defaultProps = {
        onChangeFocus: ()=>{},
        onSubmit: ()=>{},
        onPressCamera: () => {},
        onPressLocation:() => {},
    };

    state = {
        text:'',
    };

    setInputRef = (ref) => {
        this.input = ref;
    }

    handleFocus = () => {
        const {onChangeFocus} = this.props;
        if (!onChangeFocus) return;
        onChangeFocus(true);
    }

    handleBlur = () => {
        const {onChangeFocus} = this.props;
        if (!onChangeFocus) return;
        onChangeFocus(false);
    }

    //getDerivedStateFromProps is a static method which is invoked after a component is instantiated 
    //as well as when it receives new props. 
    //Since it is a static method, you cannot access this inside this method neither you can access any other class method
    //Unlike componentWillReceiveProps you cannot set state inside this method, so the only way to update state is returning an object. 
    //If you don’t want to update any state, simply return null.
    /*static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isFocused !== prevState.isFocused) { 
        }
    }*/

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.isFocused !== this.props.isFocused) {
            if (nextProps.isFocused) {
                this.input.focus();
            } else {
                this.input.blur();
            }
        }
        return true;
    }

    handleChangeText = (text) => {
        this.setState({text});
    }

    handleSubmitEditing = () => {
        const {onSubmit} = this.props;
        const {text} = this.state;

        if (!text) return;
        onSubmit(text);
        this.setState({text:''});
    }

    render() {
        
        const {onPressCamera,onPressLocation} = this.props;
        const {text} = this.state;

        return (
            <View style = {styles.toolbar}>
                <ToolbarButton title = {"C"} onPress = {onPressCamera} />
                <ToolbarButton title = {"L"} onPress = {onPressLocation} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholder={'Type something!'}
                        blurOnSubmit={false}
                        value = {text}
                        onChangeText = {this.handleChangeText}
                        onSubmitEditing = {this.handleSubmitEditing}
                        ref = {this.setInputRef}
                        onBlur = {this.handleBlur}
                        onFocus = {this.handleFocus}
                    />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbar:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:10,
        paddingLeft:16,
        backgroundColor:'white',
    },
    button:{
        top: -2,
        marginRight: 12, 
        fontSize: 20, 
        color: 'grey',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.04)', borderRadius: 16,
        paddingVertical: 4, paddingHorizontal: 12, backgroundColor: 'rgba(0,0,0,0.02)',
    },
    input: {
        flex: 1,
        fontSize: 18,
    }   
})

const ToolbarButton = ({title,onPress}) => {
    return (
        <TouchableOpacity onPress = {onPress}>
            <Text style = {styles.button}>{title}</Text>
        </TouchableOpacity>
    )
}

ToolbarButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}