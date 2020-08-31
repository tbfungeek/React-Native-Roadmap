import React from 'react';
import PropTypes from 'prop-types';
import {
    Image,
    Text,
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';

import colors from '../utils/colors';

export default class ContractItemCell extends React.Component {

    static propTypes = {
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        phone:PropTypes.string.isRequired,
        onPressItem:PropTypes.func.isRequired,
    };

    render() {
        const {avatar , name , phone, onPressItem} = this.props;
        return (
            <TouchableHighlight style={styles.container} 
                                onPress = {onPressItem}
                                underlayColor = {colors.grey}>
                <View style = {styles.contractInfo}>
                    <Image style={styles.avatar} source={{uri:avatar}}/>
                    <View style={styles.detail}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.phone}>{phone}</Text>
                    </View>
                </View>
            </TouchableHighlight>
            
        )
    }
}

const styles = StyleSheet.create({

    container:{
        paddingLeft:24,
    },

    contractInfo: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 24,
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    avatar: {
        borderRadius: 22,
        width: 44,
        height: 44,
    },

    detail: {
        justifyContent:'center',
        flex:1,
        marginLeft:20,
    },

    name: {
        color:colors.black,
        fontWeight:'bold',
        fontSize:16,
    },

    phone : {
        color:colors.blue,
        fontSize:15,
        marginTop:4,
    }
})