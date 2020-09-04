import React from 'react';
import {
    View,
} from 'react-native';

import PropTypes from 'prop-types';

const State = {
    LoadingImage:'LoadingImage',
    WillTransitionIn:'WillTransitionIn',
    RequestTransitionOut:'RequestTransitionOut',
    WillTransitionOut:'RequestTransitionOut'
}
export default class GameScreen extends React.Component {

    static propTypes= {
        puzzle : PropTypes.string.isRequired,
        image:   Image.propTypes.isRequired,
        onChange: PropTypes.func.isRequired,
        onQuit: PropTypes.func.isRequired
    }
    render() {
        return (
            <View style = {styles.container}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex:1
    }
})