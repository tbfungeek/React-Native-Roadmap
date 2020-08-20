import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {getImageFromId} from '../utils/api'
import Card from './Card'

export default class CardList extends React.Component {

    renderItem = (object) => {
        const {id , author} = object.item;
        return (
            <Card  fullName = {author} image = {{uri:getImageFromId(id)}} linkText={"Comments"}
            onPressLinkText={
                ()=>{
                console.log('Pressed link!')
                }
            }/>
        )
    }

    /*
    renderItem = ({ item: { id, author } }) => (
        <Card  fullName = {author} image = {{uri:getImageFromId(id)}} linkText={"Comments"}
            onPressLinkText={
                ()=>{
                console.log('Pressed link!')
                }
            }/>
    );*/

    render() {

        const {items} = this.props;
        const keyExtractor = ({ id }) => id.toString();
        return (
            <FlatList 
                data = {items}
                renderItem = {this.renderItem}
                keyExtractor = {keyExtractor}
            />
        )
    }
}

const styles = StyleSheet.create({

})

