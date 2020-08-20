import React from 'react';
import {View,StyleSheet,Text,ColorPropType,TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import Avatar from './Avatar'
import getInitials from '../utils/getInitials'
import getAvatarColor from '../utils/getAvatarColor'

export default class AvatarRow extends React.Component {

    render () {
        const {fullName,linkText,onPressLinkText} = this.props;
        return (
            <View style = {styles.container}> 
                <Avatar initials= {getInitials(fullName)} size={35} backgroundColor={getAvatarColor(fullName)} />
                <Text style={styles.textStyle} numberOfLines={1}>{fullName}</Text>

                {!!linkText && (
                    <TouchableOpacity onPress = {onPressLinkText}>
                        <Text> {linkText} </Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height:50,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15,
        marginVertical:10,
    },
    textStyle: {
        flex:1,
        fontSize:14,
        marginLeft:10,
    }
});

