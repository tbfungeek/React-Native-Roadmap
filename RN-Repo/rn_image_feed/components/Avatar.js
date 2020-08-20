import React from 'react';
import {ColorPropType,View,StyleSheet,Text} from 'react-native';
import PropTypes from 'prop-types';

export default class Avatar extends React.Component {

    static propTypes = {
        initials:PropTypes.string.isRequired,
        size:PropTypes.number.isRequired,
        backgroundColor:ColorPropType.isRequired,
    };

    render() {

        const {size,backgroundColor,initials} = this.props;

        const style = {
            width:size,
            height:size,
            borderRadius:size/2,
            backgroundColor
        }
        
        return (
            <View style = {[style,styles.container]}>
                <Text style = {styles.textStyles}> {initials} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        justifyContent:'center',
        alignItems:'center'
    },

    textStyles: {
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
    }

})
