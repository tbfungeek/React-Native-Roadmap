import React from 'react';
import {StyleSheet, View} from 'react-native';
import SnapCarousel, {
  AdditionalParallaxProps,
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {screenWidth, wp, hp} from '@/utils/DimensionsUtils';
import {ICarousel} from '@/model/home';

const contentWidth = wp(90); //内容宽度
const itemHorizontalMargin = wp(2); //间距宽度
const itemVerticalMargin = wp(4); //间距宽度
const contentHeight = hp(26);
const carouselWidth = screenWidth; //轮播图宽度
const itemWidth = contentWidth + itemHorizontalMargin * 2; //每项宽度
const carouselHeight = contentHeight + itemVerticalMargin * 2;

interface IProps {
  data: ICarousel[];
}
export default class Carousel extends React.Component<IProps> {
  state = {
    activeDotIndex: 0,
  };
  renderItem = (
    {item}: {item: ICarousel},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item.image}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.3}
        showSpinner
        spinnerColor={'#e94922'}
        {...parallaxProps}
      />
    );
  };

  onSnapToItem = (index: number) => {
    this.setState({
      activeDotIndex: index,
    });
  };
  /*https://github.com/archriss/react-native-snap-carousel/issues/61*/
  render() {
    const {data} = this.props;
    return (
      <View>
        <SnapCarousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={carouselWidth}
          sliderHeight={carouselHeight}
          itemHeight={contentHeight}
          itemWidth={itemWidth}
          hasParallaxImages
          autoplay
          loop
          onSnapToItem={this.onSnapToItem}
        />
        {this.pagination}
      </View>
    );
  }

  get pagination() {
    const {activeDotIndex} = this.state;
    const {data} = this.props;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          dotStyle={styles.dot}
          dotContainerStyle={styles.dotContainerStyle}
          containerStyle={styles.paginationContainer}
          dotsLength={data.length}
          activeDotIndex={activeDotIndex}
          inactiveDotScale={0.6}
          inactiveDotOpacity={0.9}
          inactiveDotColor={'rgba(255,255,255,0.9)'}
          dotColor={'#e94922'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: contentHeight,
    borderRadius: 6,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },

  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    top: -20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  dotContainerStyle: {
    marginHorizontal: 6,
  },
});
