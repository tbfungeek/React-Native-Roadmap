import React from 'react';
import {StyleSheet, View, Text, Image, Animated} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {useHeaderHeight} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigators/StackNavigator';
import coverRight from '../../../assets/cover-right.png';
import {BlurView} from '@react-native-community/blur';
import Tab from '@/components/Album/Tab';
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

const mapStateToProps = ({album}: RootState) => {
  return {
    summary: album.summary,
    author: album.author,
  };
};

const connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connecter>;

interface IProps extends ModelState {
  headerHeight: number;
  route: RouteProp<RootStackParamList, 'Album'>;
}

class AlbumScreen extends React.Component<IProps> {
  translationY = new Animated.Value(0);
  translateYOffset = new Animated.Value(0);
  translateY = Animated.add(this.translationY, this.translateYOffset);
  componentDidMount() {
    const {dispatch, route} = this.props;
    const {id} = route.params.item;
    dispatch({
      type: 'album/fetchAlbumList',
      payload: {
        id,
      },
    });
  }

  /*onGestureEvent = (gestureEvent: PanGestureHandlerGestureEvent) => {
    console.log(gestureEvent.nativeEvent.translationY);
  };*/

  onGestureEvent = Animated.event([
    {nativeEvent: {translationY: this.translationY}},
  ]);

  onHandlerStateChange = ({nativeEvent}: PanGestureHandlerStateChangeEvent) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let {translationY} = nativeEvent;
      //value => offset
      //value = 0
      this.translateYOffset.extractOffset();
      //value = translationY
      this.translateYOffset.setValue(translationY);
      //value = value + offset
      this.translateYOffset.flattenOffset();
      this.translationY.setValue(0);
    }
  };

  renderHeader = () => {
    const {headerHeight, summary, author, route} = this.props;
    const {title, image} = route.params.item;
    const albumHeaderStyle = {
      paddingTop: headerHeight,
    };
    return (
      <View style={[styles.header, albumHeaderStyle]}>
        <Image source={{uri: image}} style={styles.backgroundImage} />
        <BlurView
          style={StyleSheet.absoluteFillObject}
          blurType={'light'}
          blurAmount={1}
          blurRadius={1}
        />
        <View style={styles.leftView}>
          <Image source={coverRight} style={styles.coverRight} />
          <Image source={{uri: image}} style={styles.thumbnails} />
        </View>

        <View style={styles.rightView}>
          <Text style={styles.title}>{title}</Text>
          <View>
            <View style={styles.summery}>
              <Text style={styles.summeryText} numberOfLines={1}>
                {summary}
              </Text>
            </View>
            <View style={styles.author}>
              <Image source={{uri: author.avatar}} style={styles.avatar} />
              <Text style={styles.authorName}>{author.name}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <PanGestureHandler
        onGestureEvent={this.onGestureEvent}
        onHandlerStateChange={this.onHandlerStateChange}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateY: this.translateY}],
            },
          ]}>
          {this.renderHeader()}
          <Tab />
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

function Wrapper(props: IProps) {
  const headerHeight = useHeaderHeight();
  return <AlbumScreen {...props} headerHeight={headerHeight} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#eee',
  },
  header: {
    height: 260,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  leftView: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  thumbnails: {
    width: 98,
    height: 98,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  coverRight: {
    height: 98,
    position: 'absolute',
    right: -22,
    resizeMode: 'contain',
  },
  rightView: {
    marginLeft: 20,
  },
  summery: {
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  summeryText: {
    color: '#fff',
    fontSize: 12,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 10,
  },
  authorName: {
    color: '#fff',
    fontSize: 12,
  },
});

export default connecter(Wrapper);
