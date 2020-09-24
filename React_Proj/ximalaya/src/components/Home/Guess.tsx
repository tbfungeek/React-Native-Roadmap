import React from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/model/index';

const mapStateToProps = ({home}: RootState) => ({
  guess: home.guess,
});

const Connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connecter>;

class Guess extends React.Component<ModelState> {
  renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
      </View>
    );
  };

  render() {
    const {guess} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.headTitleStyle}>猜你喜欢</Text>
        <FlatList numColumns={3} data={guess} renderItem={this.renderItem} />
      </View>
    );
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchGuess',
    });
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    marginHorizontal: 10,
  },
  item: {
    flex: 1,
    padding: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  title: {
    color: '#666',
    fontSize: 12,
    marginVertical: 2,
    textAlign: 'center',
  },
  headTitleStyle: {
    color: '#333',
    fontSize: 16,
    marginBottom: 2,
  },
});

export default Connecter(Guess);
