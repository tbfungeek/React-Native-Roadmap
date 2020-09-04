import React from 'react';
import { 
    View, 
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
} from 'react-native';

import PropTypes from 'prop-types';

export default class Button extends React.Component {
    render() {
        const {title} = this.props;
        return (
            <TouchableWithoutFeedback>
                <View style = {styles.container}>
                    <Text style = {styles.title}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F1E2A',
        borderWidth: 2,
        height:100,
    },
    title: {
        backgroundColor:'transparent',
        fontSize: 24,
    }
})