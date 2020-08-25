import React from 'react';
import {StyleSheet, View, ScrollView,Text} from 'react-native';
import PropTypes from 'prop-types';

export default class CommentList extends React.Component {

    static propTypes= {
        items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    };

    //注意这里为item index，其中index为自动赋值的
    renderItem = (item,index) => {
        return (
            <View key={index} style={styles.comment}>
                <Text>{item}</Text>
            </View>
        )
    };

    render() {
        const {items} = this.props;
        return (
            <ScrollView>
                {items.map(this.renderItem)}
            </ScrollView>
        )
    };
}

const styles = StyleSheet.create({
    comment: {
        marginLeft:20,
        paddingVertical:20,
        paddingRight:20,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'rgba(0,0,0,0.05)',
    }
})