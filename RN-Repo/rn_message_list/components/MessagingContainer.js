import React from 'react';
import {
    StyleSheet,
    UIManager,
    Platform,
    LayoutAnimation,
    BackHandler,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const INPUT_METHOD = {
    NONE:'NONE',
    KEYBOARD:'KEYBOARD',
    CUSTOM:'CUSTOM'
};

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) { 
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class MessagingContainer extends React.Component {

    static propTypes= {
        containerHeight:PropTypes.number.isRequired,
        contentHeight:PropTypes.number.isRequired,
        keyboardHeight:PropTypes.number.isRequired,
        keyboardVisible:PropTypes.bool.isRequired,
        keyboardWillShow:PropTypes.bool.isRequired,
        keyboardWillHide:PropTypes.bool.isRequired,
        keyboardAnimationDuration:PropTypes.number.isRequired,
        inputMethod:PropTypes.oneOf(Object.values(INPUT_METHOD)).isRequired,
        onChangeInputMethod:PropTypes.func,
        children:PropTypes.node,
        renderInputMethodEditor:PropTypes.func.isRequired,
    };

    static defaultProps= {
        children:null,
        onChangeInputMethod:() => {}
    };

    render() {
        const {
            children,
            renderInputMethodEditor,
            inputMethod,
            containerHeight,
            contentHeight,
            keyboardWillShow,
            keyboardWillHide,
            keyboardHeight,
        } = this.props;

        const useContentHeight = keyboardWillShow || inputMethod === INPUT_METHOD.KEYBOARD;
        const containerStyle = {
            height:useContentHeight ? contentHeight : containerHeight,
        }
        const showCustomInput = inputMethod === INPUT_METHOD.CUSTOM && !keyboardWillShow;
        const keyboardIsHidden = inputMethod == INPUT_METHOD.NONE && !keyboardWillShow;
        const keyboardIsHiding = inputMethod == INPUT_METHOD.KEYBOARD && keyboardWillHide;
        const inputStyle = {
            height:showCustomInput ? keyboardHeight || 250:0,
            marginTop: isIphoneX() && (keyboardIsHidden || keyboardIsHiding) ? 24 : 0,
        }

        return (
            <View style = {containerStyle}>
                {children}
                <View style={inputStyle}>{renderInputMethodEditor()}</View>
            </View>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {

        const {onChangeInputMethod} = this.props;
        if (!this.props.keyboardVisible && nextProps.keyboardVisible) {
            onChangeInputMethod(INPUT_METHOD.KEYBOARD)
        } else if (
            this.props.keyboardVisible 
            && !nextProps.keyboardVisible 
            && nextProps.inputMethod !== INPUT_METHOD.CUSTOM
        ) {
            onChangeInputMethod(INPUT_METHOD.NONE);
        }

        const {keyboardAnimationDuration} = this.props;

        const animation = LayoutAnimation.create(
            keyboardAnimationDuration,
            Platform.OS == 'android' ? LayoutAnimation.Types.easeInEaseOut : LayoutAnimation.Types.keyboard,
            LayoutAnimation.Properties.opacity,
        );
        LayoutAnimation.configureNext(animation);
        return true;
    }

    componentDidMount() {
        this.subscription = BackHandler.addEventListener('hardwareBackPress',() => {
            const {onChangeInputMethod,inputMethod} = this.props;
            if (inputMethod === INPUT_METHOD.CUSTOM) {
                onChangeInputMethod(INPUT_METHOD.NONE);
                return true;
            }
            return false;
        });
    }

    componentWillUnmount() { 
        this.subscription.remove();
    }
}
