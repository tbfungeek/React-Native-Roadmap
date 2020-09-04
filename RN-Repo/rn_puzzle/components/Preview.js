import {
    Image,
    StyleSheet,
    View
} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';

import { calculateItemSize, itemMargin } from '../utils/grid';

export default class Preview extends React.Component {

    static propTypes = {
        image: Image.propTypes.source,
        boardSize: PropTypes.number.isRequired,
    };
      
    static defaultProps = {
        image: null,
    };

    render() {

        const {image, boardSize} = this.props;
        const itemSize = calculateItemSize(boardSize);
        const scaledSize = itemSize < 80 ? itemSize * 2 + itemMargin : itemSize;
        const style = {
            width:scaledSize,
            height:scaledSize,
        }
        return (
            <View style = {styles.container}>
                <Image style = {[styles.image,style]} source={image}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding:6,
        borderRadius:6,
        backgroundColor:'#1F1E2A',
    },
    image: {
        resizeMode: 'contain',
    }
})
