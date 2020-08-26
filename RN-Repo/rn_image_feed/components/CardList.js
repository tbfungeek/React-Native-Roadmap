import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {getImageFromId} from '../utils/api'
import Card from './Card'

export default class CardList extends React.Component {

    static propTypes = {
        items:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                author: PropTypes.string.isRequired,
            }),
        ).isRequired,
        commentsForItem:PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
        onPressComments:PropTypes.func.isRequired,
    }

    renderItem = (object) => {

        const {id , author} = object.item;
        const {commentsForItem,onPressComments} = this.props;
        const comments = commentsForItem[id];

        return (
            <Card fullName = {author} 
                  image = {{uri:getImageFromId(id)}} 
                  linkText={`${comments ? comments.length : 0} Comments`}
            onPressLinkText={
                ()=>{
                    onPressComments(id)
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

        const {items,commentsForItem} = this.props;

        const keyExtractor = ({ id }) => id.toString();

        return (
            <FlatList 
                data = {items}
                renderItem = {this.renderItem}
                keyExtractor = {keyExtractor}
                extraData = {commentsForItem}
            />
        )
    }
}
