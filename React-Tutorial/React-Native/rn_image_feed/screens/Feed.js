import React from 'react';
import {ViewPropTypes,ColorPropType,View,StyleSheet,Text,SafeAreaView, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import CardList from '../components/CardList'
import {fetchImages} from '../utils/api'

export default class Feed extends React.Component {

    static propTypes= {
        style:ViewPropTypes.style,
        commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
        onPressComments: PropTypes.func.isRequired,
    }

    state = {
        items: [],
        loading:true,
        error:false,
    }
    async componentDidMount() {
        try {
            const items = await fetchImages();
            this.setState({
                loading:false,
                items:items,
                error: false
            });
        } catch (error) {
            this.setState({
                loading:false,
                error:true,
            });
        }
    }
    render() {
        const {style} = this.props;
        const {commentsForItem,onPressComments} = this.props;
        const {items,loading,error} = this.state;
        return (
            <SafeAreaView style = {style}> 
                {loading && (<ActivityIndicator size = 'large' style = {StyleSheet.absoluteFill}/>)}
                {error && (<Text>Error Happened</Text>)}
                <CardList items = {items} commentsForItem = {commentsForItem} onPressComments = {onPressComments}/>
            </SafeAreaView>
        )
    }
}