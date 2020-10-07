import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import {useHeaderHeight} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigators/StackNavigator';

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
  render() {
    const {headerHeight, summary, author, route} = this.props;
    return (
      <View style={[styles.container, {paddingTop: headerHeight}]}>
        <Text>Albums</Text>
      </View>
    );
  }
}

function Wrapper(props: IProps) {
  const headerHeight = useHeaderHeight();
  return <AlbumScreen {...props} headerHeight={headerHeight} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default connecter(Wrapper);
