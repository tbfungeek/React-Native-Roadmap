import React from 'react';
import {
    TouchableOpacity,
    Image,
    Alert,
    StyleSheet
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import PropTypes from 'prop-types';
import Grid from './Grid';

const keyExtractor = ({uri}) => uri;

export default class ImageGrid extends React.Component {

    loading = false;
    cursor = null;

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

    getImages = async (after) => {

        const status = await MediaLibrary.getPermissionsAsync();
        if(!status.granted){
            const request = await MediaLibrary.requestPermissionsAsync();
            if(!request.granted){
                Alert.alert('Camera roll permission denied');
                return;
            }
        } 

        if (this.loading) return;
        
        this.loading = true;

        const album = await MediaLibrary.getAlbumAsync('Camera')
        const photos = await MediaLibrary.getAssetsAsync(
        {   album: album ,
            first:20,
            after,
        });
        const {assets,totalCount,hasNextPage,endCursor} = photos;
        this.setState({images:this.state.images.concat(assets)},() => {
            this.loading = false;
            this.cursor = hasNextPage ? endCursor: null;
        });    
    }

    getNextImages = () => {
        if (!this.cursor) return;
        this.getImages(this.cursor);
    }

    renderGridItem = ({item:{uri},size,marginTop,marginLeft}) => {

        const style = {
            width:size,
            height:size,
            marginLeft,
            marginTop,
        };

        const { onPressImage } = this.props;

        return (

            <TouchableOpacity
                key = {uri}
                activeOpacity = {0.75}
                onPress = {()=>onPressImage(uri)}
                style={style}
            >
                <Image source={{uri}} style = {styles.image}/>
            </TouchableOpacity>
        );
    }

    render() {
        const {images} = this.state;
        return (
            <Grid
                onEndReached = {this.getNextImages}
                data = {images}
                renderItemOfGrid = {this.renderGridItem}
                keyExtractor = {keyExtractor}/>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        flex:1
    }
})

