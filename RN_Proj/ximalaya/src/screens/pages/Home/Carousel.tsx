import React from 'react';
import {StyleSheet} from 'react-native';
import SnapCarousel, {
  AdditionalParallaxProps,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {screenWidth, wp, hp} from '@/utils/DimensionsUtils';

const data = [
  'https://pic.17qq.com/uploads/dckphkhkdv.jpeg',
  'http://img01.jituwang.com/170801/256839-1FP110361076.jpg',
  'https://seopic.699pic.com/photo/40010/8301.jpg_wh1200.jpg',
  'https://i2.kknews.cc/SIG=3gqa8i3/16p8000546pprqq924np.jpg',
  'https://i2.kknews.cc/SIG=2rs408i/16q00005796oo7sr83sr.jpg',
  'https://i2.kknews.cc/SIG=3g4ja50/16po00013sn34opqo0p1.jpg',
];

const contentWidth = wp(90); //内容宽度
const itemHorizontalMargin = wp(2); //间距宽度
const itemVerticalMargin = wp(4); //间距宽度
const contentHeight = hp(26);
const carouselWidth = screenWidth; //轮播图宽度
const itemWidth = contentWidth + itemHorizontalMargin * 2; //每项宽度
const carouselHeight = contentHeight + itemVerticalMargin * 2;

export default class Carousel extends React.Component {
  renderItem = (
    {item}: {item: string},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        {...parallaxProps}
      />
    );
  };
  /*https://github.com/archriss/react-native-snap-carousel/issues/61*/
  render() {
    return (
      <SnapCarousel
        data={data}
        renderItem={this.renderItem}
        sliderWidth={carouselWidth}
        sliderHeight={carouselHeight}
        itemHeight={contentHeight}
        itemWidth={itemWidth}
        hasParallaxImages
      />
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: contentHeight,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 6,
  },
});
