import React from 'react';
import {ColorPropType,View,StyleSheet,Text,SafeAreaView, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import CardList from './CardList'
import {fetchImages} from '../utils/api'


export default class Feed extends React.Component {

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
        const {items,loading,error} = this.state;
        return (
            <SafeAreaView style = {style}> 
                {loading && (<ActivityIndicator size = 'large' style = {StyleSheet.absoluteFill}/>)}
                {error && (<Text>Error Happened</Text>)}
                <CardList items = {items}/>
            </SafeAreaView>
        )
    }
}