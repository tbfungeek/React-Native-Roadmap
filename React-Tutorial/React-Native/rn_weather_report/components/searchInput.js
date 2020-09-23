import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'

export default class SearchInput extends React.Component  {

    static propTypes = {
        onSubmit:PropTypes.func.isRequired,
        placeholder:PropTypes.string
    }

    static defaultProps = {
        placeholder:'Hello'
    }

    constructor(props) {
      super(props)
    
      this.state = {
         text:""
      }
    }

    handleChangeText = (newText) => {
        this.setState({text:newText})
    }

    handleSubmit = () => {
        
        const {text} = this.state;
        const {onSubmit} = this.props;

        if (!text || !onSubmit) return;

        onSubmit(text)

        this.setState({text : ""})

    }

    render() {
        const {text} = this.state
        return (
            <View style = {styles.container}>
                <TextInput 
                    value = {text}
                    style = {styles.textInput}
                    autoCorrect = {false}
                    placeholder = {this.props.placeholder}
                    placeholderTextColor = "white"
                    clearButtonMode="always"
                    onChangeText = {this.handleChangeText}
                    onSubmitEditing = {this.handleSubmit}> 
                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        height:40,
        marginTop:20,
        backgroundColor:'#666',
        marginHorizontal:40,
        paddingHorizontal:10,
        borderRadius:5,
    },
    textInput: {
        flex:1,
        color:'white',
    }
})
