import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({album}: RootState) => {
  return {
    introduction: album.introduction,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class Introduction extends React.Component<ModelState> {
  render() {
    const {introduction} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.introductionStyle}> {introduction}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  introductionStyle: {
    fontSize: 13,
    color: '#666',
  },
});

export default connector(Introduction);