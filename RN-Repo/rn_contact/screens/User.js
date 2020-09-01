import React from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    Text,
} from 'react-native'

import {fetchUserContact} from '../utils/api'
import colors from '../utils/colors'
import ContactThumbnail from '../components/ContactThumbnail'

export default class User extends React.Component {

    static navigationOptions = {
        title: 'Me', 
        headerTintColor: 'white', 
        headerStyle: {
            backgroundColor: colors.blue, 
        },
    };

    state = {
        user:[],
        loading:true,
        error:false,
    }

    async componentDidMount() {
        try {
            const user = await fetchUserContact();
            console.log(user)
            this.setState({
                user,
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

    render() {
        const {loading,user,error} = this.state;
        const {avatar,name,phone} = user;
        
        return (
            <View style = {styles.container}>
                {loading && <ActivityIndicator size='large'/>}
                {error && <Text>...Error</Text>}
                {!loading && !error && (
                    <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(49,154,220)',
    }
})

