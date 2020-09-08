import React from 'react';
import {
    StyleSheet,
    Image,

} from 'react-native';

import PropTypes from 'prop-types';
import Grid from './Grid';

const keyExtractor = ({uri}) => uri;

export default class ImageGrid extends React.Component {

    static propTypes = {
        onPressImage: PropTypes.func, 
    };
    
    static defaultProps = { 
        onPressImage: () => {},
    };

    state = {
        images: [
            { uri: 'https://picsum.photos/600/600?image=10' }, 
            { uri: 'https://picsum.photos/600/600?image=20' }, 
            { uri: 'https://picsum.photos/600/600?image=30' }, 
            { uri: 'https://picsum.photos/600/600?image=40' },
        ], 
    };

    renderGridItem = ({item:{uri},size,marginTop,marginLeft}) => {

        const style = {
            width:size,
            height:size,
            marginLeft,
            marginTop,
        };

        return (
            <Image source={{uri}} style = {style}/>
        );
    }

    render() {
        const {images} = this.state;
        return (
            <Grid
                data = {images}
                renderItemOfGrid = {this.renderGridItem}
                keyExtractor = {keyExtractor}/>
        )
    }
}

