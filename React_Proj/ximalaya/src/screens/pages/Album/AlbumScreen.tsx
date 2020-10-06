import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({album}: RootState) => {
  return {
    album: album,
  };
};

const connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connecter>;

interface IProps extends ModelState {}

class AlbumScreen extends React.Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Albums</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default AlbumScreen;
