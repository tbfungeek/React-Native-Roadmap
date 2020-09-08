import React from 'react';
import {
    StyleSheet,
    Image,
    Alert,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
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
        images: [], 
    };

    async componentDidMount() {
        this.getImages();
    }

    getImages = async () => {

        const status = await MediaLibrary.getPermissionsAsync();
        //console.log("getPermissionsAsync", status);
        if(!status.granted){
            const request = await MediaLibrary.requestPermissionsAsync();
            if(!request.granted){
                Alert.alert('Camera roll permission denied');
                return;
            }
        } 

      const album = await MediaLibrary.getAlbumAsync('Camera')
      const photos = await MediaLibrary.getAssetsAsync({ album: album })
      const {assets} = photos;
      this.setState({images:assets});       
    }

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

