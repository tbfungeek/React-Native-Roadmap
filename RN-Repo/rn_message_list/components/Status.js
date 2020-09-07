import React from 'react';
import { View ,StyleSheet ,Platform, StatusBar,Text} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Constants from 'expo-constants';

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;

export default class Status extends React.Component {

    state = {
        isConnected: false,
    }

    componentDidMount() {
        this.unsubscribe = NetInfo.addEventListener(state => {
            const {isConnected} = state;
            this.setState({isConnected})
        })
    }
    
    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {

        const {isConnected} = this.state;
        const backgroundColor = isConnected ? 'white' : 'red';
        const statusBar = (
            <StatusBar
                backgroundColor = {backgroundColor}
                barStyle = {isConnected ? 'dark-content':'light-content'}
                animated = {false}/>
        );
        const messageContainer = (
            <View style = {styles.messageContainer} pointerEvents="none">
                {statusBar}
                {!isConnected && (
                    <View style={styles.bubble}>
                        <Text style={styles.text}> No NetWork connection</Text>
                    </View>
                )}
            </View>
        )

        if (Platform.OS === 'ios') {
            return <View style = {[styles.status,{backgroundColor}]}>{messageContainer}</View>
        }

        return messageContainer;
    }
}

const styles = StyleSheet.create({
    status: {
        height: statusHeight,
        zIndex:1,
    },
    messageContainer: {
        zIndex:1,
        position: 'absolute',
        right:0,
        left:0,
        height:80,
        top: statusHeight,
        alignItems:'center',
    },
    bubble: {
        backgroundColor:'red',
        marginTop:20,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:20,
    },

    text: {
        color:'white'
    }
})