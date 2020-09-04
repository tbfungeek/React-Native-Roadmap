import React from 'react';
import { View , StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import Toggle from '../components/Toggle';
import Button from '../components/Button';

const State = {
    Launching: 'Launching',
    WillTransitionIn:'WillTransitionIn',
    WillTransitionOut:'WillTransitionOut',
};

const BOARD_SIZES = [3, 4, 5, 6];
export default class StartScreen extends React.Component {

    static propTypes= {
        size: PropTypes.number.isRequired,
        onChangeSize:PropTypes.func.isRequired,
        onStartGame:PropTypes.func.isRequired,
    };

    state = {
        transitionState:State.Launching,
    };
    render() {

        const {size, onChangeSize} = this.props;
        const {transitionState} = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Logo/>
                </View>

                <View>
                    <Toggle options={BOARD_SIZES}/>
                </View>

                <View>
                    <Button title = {'Start Game'} onPress = {() => {}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container : {
        flex:1,
        justifyContent:'space-around',
        alignItems: 'center',
        paddingVertical: 20,
    },

    logo: {
        alignSelf: 'stretch',
        paddingHorizontal:40,
    },
})
