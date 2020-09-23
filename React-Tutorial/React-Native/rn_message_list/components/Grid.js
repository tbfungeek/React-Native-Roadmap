import React from 'react';
import {
    StyleSheet,
    FlatList,
    Dimensions,
    PixelRatio,
}
from 'react-native';
import PropTypes from 'prop-types';

export default class Grid extends React.Component {

    static propTypes = {
        renderItemOfGrid :PropTypes.func.isRequired,
        numColumns: PropTypes.number,
        itemMargin: PropTypes.number,
    };

    static defaultProps = {
        numColumns:4,
        itemMargin:StyleSheet.hairlineWidth,
    };

    renderGridItem = (info) => {
        const {index} = info;
        const {width} = Dimensions.get('window');
        const {numColumns, itemMargin, renderItemOfGrid} = this.props;

        const size = PixelRatio.roundToNearestPixel((width - itemMargin * (numColumns - 1)) / numColumns);

        const marginLeft = index % numColumns === 0 ? 0 :itemMargin;
        const marginTop = index < numColumns ? 0:itemMargin;

        return renderItemOfGrid({...info,size,marginLeft,marginTop});
    }

    render() {
        return (
            <FlatList
                {...this.props}
                renderItem = {this.renderGridItem}/>
        )
    }
}

const styles = StyleSheet.create({
    
})