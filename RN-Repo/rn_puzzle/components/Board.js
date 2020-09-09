import {
    Animated,
    Image,
    StyleSheet,
    View,
    Dimensions,
    Easing,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { availableMove, getIndex } from '../utils/puzzle';
import {
calculateContainerSize,
calculateItemSize,
itemMargin,
calculateItemPosition,
} from '../utils/grid';
import PuzzlePropType from '../validators/PuzzlePropType';


//import Draggable from './Draggable';
//import clamp from '../utils/clamp';

const State = {
    WillTransitionIn:'WillTransitionIn',
    DidTransitionIn:'DidTransitionIn',
    DidTransitionOut:'DidTransitionOut',
};

export default class Board extends React.Component {

    static propTypes = {
        puzzle: PuzzlePropType.isRequired,
        teardown: PropTypes.bool.isRequired,
        image: Image.propTypes.source,
        previousMove: PropTypes.number,
        onMoveSquare: PropTypes.func.isRequired,
        onTransitionIn: PropTypes.func.isRequired,
        onTransitionOut: PropTypes.func.isRequired,
    };

    static defaultProps = {
        image: null,
        previousMove: null,
    };

    constructor(props) {
        super(props);

        const {puzzle:{size,board}} = props;
        
        this.state = {
            transitionState:State.willTransitionIn
        };
        this.animatedValues = [];

        console.log(board);

        board.forEach((square,index) => {
            console.log(square,index)
            const {top,left} = calculateItemPosition(size,index);

            this.animatedValues[square] = {
                scale: new Animated.Value(1),
                top: new Animated.Value(top),
                left: new Animated.Value(left),
            };
        })
    }

    componentDidMount() {
        const {onTransitionIn} = this.props;
        this.setState({transitionState:State.DidTransitionIn});
        onTransitionIn();
    }

    render() {

        const {puzzle:{board}} = this.props;
        const {transitionState} =  this.state;

        const containerSize = calculateContainerSize();
        const containerStyle = {width:containerSize,height: containerSize};
        return (
            <View style = {[styles.container,containerStyle]}>
            {transitionState !== State.DidTransitionOut && (
                board.map(this.renderSquare)
            )}
            </View>
        )
    }

    renderSquare = (square, index) => {
        const {puzzle:{size,empty},image} = this.props;
        const {transitionState} = this.state;
        

        console.log(image)


        if (square === empty) return null;

        const itemSize = calculateItemSize(size);

        const itemStyle = {
            position: 'absolute',
            width:itemSize,
            height:itemSize,
            overflow: 'hidden',
            transform: [
                {translateX: this.animatedValues[square].left},
                {translateY: this.animatedValues[square].top},
                {scale: this.animatedValues[square].scale},
            ]
        }

        const imageStyle = {
            position:'absolute',
            width:itemSize * size + (itemMargin * size - 1),
            height:itemSize * size + (itemMargin * size - 1),
            transform: [
                {
                    translateX:-Math.floor(square % size) * (itemSize + itemMargin)
                },
                {
                    translateY:-Math.floor(square % size) * (itemSize + itemMargin)
                }
            ]
        }

        return (
            <Animated.View key={square} style = {itemStyle}>
                <Image style = {imageStyle} source={image}/>
            </Animated.View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
      padding: 6,
      borderRadius: 6,
      backgroundColor: '#1F1E2A',
    },
  });