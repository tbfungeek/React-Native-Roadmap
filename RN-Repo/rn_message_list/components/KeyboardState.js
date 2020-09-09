import React from 'react';
import {
    StyleSheet, 
    Keyboard,
    Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const INITIAL_ANIMATION_DURATION = 250;

export default class KeyboardState extends React.Component {

    constructor(props) {
        super (props);

        const { layout:{height} } = props;

        this.state = {
            contentHeight:height,
            keyboardHeight:0,
            keyboardVisible:false,
            keyboardWillShow:false,
            keyboardWillHide:false,
            keyboardAnimationDuration:INITIAL_ANIMATION_DURATION,
        }
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            this.subscriptions = [
                Keyboard.addListener('keyboardWillShow',this.keyboardWillShow),
                Keyboard.addListener('keyboardWillHide',this.keyboardWillHide),
                Keyboard.addListener('keyboardDidShow',this.keyboardDidShow),
                Keyboard.addListener('keyboardDidHide',this.keyboardDidHide),
            ];
        } else {
            this.subscriptions = [
                Keyboard.addListener('keyboardDidShow',this.keyboardDidShow),
                Keyboard.addListener('keyboardDidHide',this.keyboardDidHide),
            ];
        }
    }

    componentWillUnmount(){
        this.subscriptions.forEach(subscription => subscription.remove())
    }

    keyboardWillShow = (event) => {
        this.setState({keyboardWillShow: true});
        this.measure(event);
        console.log("keyboardWillShow");
    };

    keyboardWillHide = (event) => {
        this.setState({keyboardWillHide:true});
        this.measure(event);
        console.log("keyboardWillHide");
    };

    keyboardDidShow = (event) => {
        this.setState({
                        keyboardWillShow:false,
                        keyboardVisible:true
        });
        this.measure(event);
        console.log("keyboardDidShow");
    };

    keyboardDidHide = (event) => {
        this.setState({
            keyboardWillHide:false,
            keyboardVisible: false,
        })
        console.log("keyboardDidShow");
    };

    measure = (event) => {
        console.log("event==>",event);
        const {layout} = this.props;
        const {endCoordinates:{height,screenY},duration=INITIAL_ANIMATION_DURATION} = event;
        this.setState({
            contentHeight:screenY - layout.y,
            keyboardHeight:height,
            keyboardAnimationDuration:duration,
        })
        console.log("state==>",this.state);
    };


    static propTypes= {
        layout:PropTypes.shape(
            { 
                x:PropTypes.number.isRequired,
                y: PropTypes.number.isRequired,
                width: PropTypes.number.isRequired,
                height: PropTypes.number.isRequired,
            }
        ).isRequired,
        children: PropTypes.func.isRequired,
    };



    render() {

        const {children,layout}  = this.props;
        const {
            contentHeight,
            keyboardHeight,
            keyboardVisible,
            keyboardWillShow,
            keyboardWillHide,
            keyboardAnimationDuration,
        } = this.state;

        return children({
            containerHeight:layout.height,
            contentHeight,
            keyboardHeight,
            keyboardVisible,
            keyboardWillShow,
            keyboardWillHide,
            keyboardAnimationDuration,
        })
    }
}
