import React from 'react';
import { View ,StyleSheet} from 'react-native';

import colors from '../utils/colors';
import {fetchRandomContact} from '../utils/api';
import ContactThumbnail from '../components/ContactThumbnail'
import DetailListItem from '../components/DetailListItem'

export default class Profile extends React.Component {
    
    state = {
        contract:{},
    };

    async componentDidMount() {
        try {
            const contract = await fetchRandomContact();
            this.setState({
                contract: contract
            })
        } catch (err) {

        }
    }

    render() { 
        const {route} = this.props;
        const {avatar,name,phone,email,cell} = route.params;

        return (
            <View style={styles.container}>
                <ContactThumbnail style={styles.avatarSection} avatar={avatar} name={name} phone={phone} onPress = {() => {}}/>
                <View style={styles.detailSection}>
                    <DetailListItem icon = "email" title = "Email" value={email}/>
                    <DetailListItem icon = "phone" title = "Work" value={cell}/>
                    <DetailListItem icon = "voicemail" title = "Personal" value={phone}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgb(49,154,220)',
        flex:1,
    },

    avatarSection: {
        flex:1,
        backgroundColor:'rgb(49,154,220)'
    },

    detailSection: {
        flex:1,
        backgroundColor:'white'
    }
})