import React from 'react';
import { View , StyleSheet, Animated} from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import Toggle from '../components/Toggle';
import Button from '../components/Button';
import sleep from '../utils/sleep'
import configureTransition from '../utils/configureTransition'

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

    toggleOpacity = new Animated.Value(0);
    buttonOpacity = new Animated.Value(0);

    handleGameStart = async() => {

        const {onStartGame} = this.props;

        await configureTransition(() => {
            this.setState({ transitionState : State.WillTransitionOut});
        })

        if (!onStartGame) return;

        onStartGame()
    }

    async componentDidMount () {
        await sleep(500);
        await configureTransition(() => {
            this.setState({ transitionState: State.WillTransitionIn });
        });

        Animated.timing(this.toggleOpacity, {
            toValue:1,
            duration:500,
            delay:50,
            useNativeDriver:true,
        }).start();

        Animated.timing(this.buttonOpacity,{
            toValue:1,
            duration:500,
            delay:100,
            useNativeDriver:true,
        }).start();
    };

    render() {

        const {size, onChangeSize} = this.props;
        const {transitionState} = this.state;

        console.log(size)

        const toggleStyle = { opacity: this.toggleOpacity }; 
        const buttonStyle = { opacity: this.buttonOpacity };

        return (
            transitionState !== State.WillTransitionOut && (
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Logo/>
                    </View>

                    {transitionState !== State.Launching && (
                        <Animated.View style={toggleStyle}>
                            <Toggle options = {BOARD_SIZES} 
                                    value = {size} 
                                onChange = {onChangeSize}/>
                        </Animated.View>
                    )}

                    {transitionState !== State.Launching && (
                        <Animated.View style={buttonStyle}>
                            <Button title = {'Start Game'} onPress = {this.handleGameStart}/>
                        </Animated.View>
                    )}
                </View>
            )
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
