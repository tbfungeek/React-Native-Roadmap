import React from 'react';
import {ColorPropType,View,StyleSheet,Image,ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import AvatarRow from "./AvatarRow";

export default class Card extends React.Component {

    state = {
        isLoading: true
    }

    render() {

        const {fullName,image,linkText,onPressLinkText} = this.props;
        const {isLoading} = this.state;

        return (
            <View style = {styles.container}>
                <AvatarRow fullName = {fullName} linkText = {linkText} onPressLinkText = {onPressLinkText} />
                <View style={styles.image}>
                    {isLoading && <ActivityIndicator style = {StyleSheet.absoluteFill} size = 'large'/>}
                    <Image source={image} style = {StyleSheet.absoluteFill} onLoad = {this.handleLoading} />
                </View>
            </View>
        )
    }

    handleLoading = () => {
        this.setState(
            { isLoading : false }
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