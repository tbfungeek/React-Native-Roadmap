import React from 'react';
import {StyleSheet, View} from 'react-native';
import SnapCarousel, {
  AdditionalParallaxProps,
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {screenWidth, wp, hp} from '@/utils/DimensionsUtils';
import {ICarousel} from '@/model/home';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/model/index';

const contentWidth = wp(90); //内容宽度
const itemHorizontalMargin = wp(2); //间距宽度
const itemVerticalMargin = wp(4); //间距宽度
export const contentHeight = hp(26);
const carouselWidth = screenWidth; //轮播图宽度
const itemWidth = contentWidth + itemHorizontalMargin * 2; //每项宽度
const carouselHeight = contentHeight + itemVerticalMargin * 2;

interface IProps {
  data: ICarousel[];
}

const mapStateToProps = ({home}: RootState) => ({
  carousel: home.carousel,
  activeCarouselIndex: home.activeCarouselIndex,
});

const Connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connector>;

class Carousel extends React.Component<ModelState> {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchCarousel',
    });
  }

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
    const {dispatch} = this.props;
    dispatch({
      type: 'home/setState',
      payload: {
        activeCarouselIndex: index,
      },
    });
  };
  /*https://github.com/archriss/react-native-snap-carousel/issues/61*/
  render() {
    const {carousel} = this.props;
    return (
      <View>
        <SnapCarousel
          data={carousel}
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
    const {activeCarouselIndex} = this.props;
    const {carousel} = this.props;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          dotStyle={styles.dot}
          dotContainerStyle={styles.dotContainerStyle}
          containerStyle={styles.paginationContainer}
          dotsLength={carousel.length}
          activeDotIndex={activeCarouselIndex}
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

export default Connector(Carousel);
