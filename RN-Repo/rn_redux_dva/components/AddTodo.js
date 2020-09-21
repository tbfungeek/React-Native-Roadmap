import React from 'react';
import {
    TextInput,
    Button,
    View
} from 'react-native';
import {connect} from 'react-redux';
import {addTodoAction} from '../actions/todoActions';

class AddTodo extends React.Component {
    render() {
        const {dispatch} = this.props;
        return (
            <View style = {{flexDirection:"row" , padding:20}}>
                <TextInput style={{flex:1,borderWidth:1,borderColor:'#cccccc',textAlign:"center"}} onChangeText = {text=>{
                    this.inputValue = text
                }}/>
                <Button title="Add Todo" onPress = {()=> {
                    if (!this.inputValue) return;
                    dispatch(addTodoAction(this.inputValue))
                }}/>
            </View>
        )
    }
}

export default connect()(AddTodo)

