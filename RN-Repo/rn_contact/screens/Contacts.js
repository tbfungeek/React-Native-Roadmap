import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';

import {fetchContacts} from '../utils/api';
import ContractItemCell from '../components/ContractItemCell'

const keyExtractor = (item) => item.id.toString()

export default class Contracts extends React.Component {

    state = {
        contracts : [],
        loading : true,
        error   : false,
    };

    async componentDidMount() {
        try {
            const contracts = await fetchContacts();
            this.setState({
                contracts,
                loading:false,
                error:false,
            })
        } catch (error) {
            this.setState({
                loading:false,
                error:true,
            })
        } 
    }

    renderContract = ({item}) => {
        const {avatar, name, phone} = item;
        return (
            <ContractItemCell avatar={avatar} name={name} phone={phone} onPressItem = {()=>{}}/>
        )
    }

    render() {
        const {loading,contracts,error} = this.state;
        const contractsSorted = contracts.sort((a,b) => a.name.localeCompare(b.name));
        return (
            <View style = {styles.container}>
                {loading && <ActivityIndicator size='large'/>}
                {error && <Text>Error ... </Text>}
                {!loading && !error && (
                    <FlatList
                        data = {contractsSorted}
                        keyExtractor = {keyExtractor}
                        renderItem = {this.renderContract}/>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    },
});