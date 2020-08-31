import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DetailListItem extends React.Component {

    static propTypes = {
        icon:PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        value: PropTypes.string
    }

    render() {

        const {icon, title, value} = this.props;

        return (
            <View style={styles.container}>
                <Icon name={icon} size={24} style={styles.icon}/>
                <View style={styles.detail}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.value}>{value}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        borderBottomColor:'rgba(0,0,0,0.1)',
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    detail: {
        justifyContent: 'center',
    },
    icon: {
        paddingHorizontal:24,
        paddingVertical:20,
    },
    title: {
        fontWeight:'bold',
        fontSize:14,
        marginBottom:5,
    },
    value: {
        fontSize:12,
        color:'rgb(49,154,220)',
    }
})


