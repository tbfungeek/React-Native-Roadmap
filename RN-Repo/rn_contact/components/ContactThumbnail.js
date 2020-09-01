import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ContactThumbnail extends React.Component {

    static propTypes = {
        avatar:PropTypes.string.isRequired,
        name: PropTypes.string,
        phone: PropTypes.string,
        onPress: PropTypes.func,
    }

    static defaultProps = {
        onPress: () => {},
        name: '',
        phone: '',
    }
    render() {
        const {avatar, name, phone, onPress} = this.props;
        const ImageComponent = onPress ? TouchableOpacity : View;
        return (
            <View style={styles.container}>
                <ImageComponent onPress={onPress}>
                    <Image style = {styles.avatarContainer} source = {{uri:avatar}}></Image>
                </ImageComponent>
                {name !== '' && <Text style={styles.name}>{name}</Text>}
                {phone !== '' && (
                    <View style={styles.phoneSection}>
                        <Icon name='phone' size={16} style={styles.phoneIcon}/>
                        <Text style={styles.phone}>{phone}</Text>
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 30,
        paddingHorizontal:10,
        justifyContent: 'center',
        alignItems: 'center'   
    },

    avatarContainer: {
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'white',
        borderWidth:2,
    },

    name: {
        fontSize:20,
        marginTop:24,
        marginBottom:2,
        fontWeight:'bold',
        color:'white'
    },

    phoneIcon: {
        color:'white'
    },

    phoneSection: {
        flexDirection:'row',
        marginTop:4,
        justifyContent:'center',
        alignItems: 'center',
    },

    phone: {
        marginLeft:4,
        fontSize:16,
        fontWeight:'bold',
        color:'white'
    }
})