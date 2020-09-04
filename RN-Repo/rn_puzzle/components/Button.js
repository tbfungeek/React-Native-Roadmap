import React from 'react';
import { 
    Animated,
    ColorPropType,
    Easing,
    View, 
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
} from 'react-native';

import PropTypes from 'prop-types';

const getValue = (pressed,disable) => {

    const base = disable ? 0.5 : 1;
    const delta = disable ? 0.1 : 0.3;
    return pressed ? base - delta : base;
};

export default class Button extends React.Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
        height : PropTypes.number,
        color: ColorPropType,
        fontSize: PropTypes.number,
        borderRadius: PropTypes.number,
    };

    static defaultProps = {
        onPress: () => {},
        disabled:false,
        height:null,
        color: '#0CE1C2',
        fontSize: 24,
        borderRadius:100,
    };

    constructor(props) {
        super(props);

        const {disabled} = props;

        this.state = { pressed:false };
        this.value = new Animated.Value(getValue(false, disabled));
    }

    updateValue(nextProps, nextState) {
        if (
            this.props.disabled !== nextProps.disabled 
            || this.state.pressed !== nextState.pressed
        ) {
            Animated.timing(this.value,{
                duration:200,
                toValue:getValue(nextState.pressed,nextState.disabled),
                easing:Easing.out(Easing.quad),
            }).start();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        this.updateValue(nextProps,nextState);
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.updateValue(nextProps,nextState);
    }

    handlePressIn = () => {

    }

    handlePressOut = () => {

    }

    render() {

        const {title, height, onPress, color, borderRadius, fontSize} = this.props;

        const animatedColor = this.value.interpolate({
            inputRange:[0,1],
            outputRange:['black',color],
        });

        const animatedScale = this.value.interpolate({
            inputRange:[0,1],
            outputRange:[0.8,1]
        });

        const containerStyle = {
            borderColor: animatedColor,
            borderRadius,
            height,
            transform:[{scale:animatedScale}],
        };

        const titleStyle = {
            color:animatedColor,
            fontSize,
        }

        return (
            <TouchableWithoutFeedback
                onPressIn = {this.handlePressIn}
                onPressOut = {this.handlePressOut}
                onPress={onPress}>
                <Animated.View style = {[styles.container,containerStyle]}>
                    <Animated.Text style = {styles.title}>{[title,this.titleStyle]}</Animated.Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F1E2A',
        borderWidth: 2,
    },
    title: {
        backgroundColor:'transparent',
        fontSize: 24,
        color:'white',
    }
})