import React from 'react';
import { TouchableOpacity ,StyleSheet,Text} from 'react-native';

import PropTypes from 'prop-types';

export default class Todo extends React.Component {

    static propTypes= {
        onClick:PropTypes.func.isRequired,
        completed:PropTypes.bool.isRequired,
        text:PropTypes.string.isRequired
    }

    render () {
        let {onClick,completed,text} = this.props;
        const textStyle = {
            textDecorationLine:completed ? 'line-through':'none'
        }
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={onClick}>
                <Text style={textStyle}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex:1,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#cccccc',
        marginTop:10
    },
})