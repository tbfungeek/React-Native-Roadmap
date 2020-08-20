import React from 'react';
import {ColorPropType,View,StyleSheet,Image} from 'react-native';
import PropTypes from 'prop-types';
import AvatarRow from "./AvatarRow";

export default class Card extends React.Component {

    render() {

        const {fullName,image,linkText,onPressLinkText} = this.props;

        return (
            <View style = {styles.container}>
                <AvatarRow fullName = {fullName} linkText = {linkText} onPressLinkText = {onPressLinkText} />
                <Image source={image} style = {styles.image}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
       flexDirection:'column',
       justifyContent:'flex-start',
       alignItems: 'stretch',
    },

    image:{
        aspectRatio:1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    }
})