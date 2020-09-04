import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import PropTypes from 'prop-types';

import configureTransition from '../utils/configureTransition'
import PuzzlePropType from '../validators/PuzzlePropType'

const State = {
    LoadingImage:'LoadingImage',
    WillTransitionIn:'WillTransitionIn',
    RequestTransitionOut:'RequestTransitionOut',
    WillTransitionOut:'RequestTransitionOut'
}
export default class GameScreen extends React.Component {

    constructor(props) {

        super(props);
        const { image } = props;

        this.state = {
            transitionState : image ?  State.WillTransitionIn : State.LoadingImage,
            move:0,
            elapsed:0,
            previousMove: null,
            image: null,
        };

        configureTransition();
    }

    static propTypes= {
        puzzle : PuzzlePropType.isRequired,
        image:   Image.propTypes.isRequired,
        onChange: PropTypes.func.isRequired,
        onQuit: PropTypes.func.isRequired
    };

    static defaultProps = {
        image : null,
    };

    render() {

        const {puzzle,puzzle:{ size }, image}  = this.props;
        const {transitionState,move,elapsed,previousMove} = this.state;

        return (
            <View style = {styles.container}>
            {transitionState === State.LoadingImage && (
                <ActActivityIndicator size={'large'} color={'rgba(255,255,255,0.5)'}/>

            )}

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