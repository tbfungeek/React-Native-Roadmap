import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';

import {fetchContacts} from '../utils/api';

import ContactThumbnail from '../components/ContactThumbnail';

const keyExtractor = ({ phone }) => phone;

export default class Favorites extends React.Component{

    state = {
        contacts:[],
        loading:true,
        error:false,
    }

    renderFavoriteThumbnail = ({item}) => {
        const {navigation:{navigate}} = this.props;
        const {avatar}  = item;
        return(
            <ContactThumbnail
                avatar={avatar}
                name={""}
                phone={""}
                onPress = {() => {
                    navigate('Profile',{...item})
                }}
            />
        )
    }

    async componentDidMount() {
        try {
            const contacts = await fetchContacts();
            this.setState({
                contacts:contacts,
                loading:false,
                error:false
            }) 
        } catch (error) {
            this.setState({
                loading:false,
                error:true,
            })
        }
    }

    render() {

        const {loading, contacts,error} = this.state;
        const favorites = contacts.filter(contact => contact.favorite);

        return (
            <View style = {styles.container}>
            {loading && (
                <ActivityIndicator size='large'/>
            )}

            {error && (
                <Text>Error ... </Text>
            )}

            {!error && !loading && (
                <FlatList
                    data = {favorites}
                    keyExtractor = {keyExtractor}
                    numColumns = {3}
                    contentContainerStyle = {styles.list}
                    renderItem = {this.renderFavoriteThumbnail}
                />
            )}
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },

    list:{
        alignItems:'center',
    }

})

