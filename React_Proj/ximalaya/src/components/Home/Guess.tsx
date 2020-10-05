import React from 'react';
import {View, StyleSheet, Text, FlatList, Image, Alert} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/model/index';
import Icon from '@/assets/iconfont';
import Touchable from '@/components/Common/Touchable';
import {IGuess} from '@/model/home';

const mapStateToProps = (state: RootState, props) => {
  const {modelNameSpace} = props;
  const modelState = state[modelNameSpace];
  return {
    guess: modelState.guess,
  };
};

const Connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connecter>;

interface IProps extends ModelState {
  modelNameSpace: string;
}

class Guess extends React.PureComponent<IProps> {
  renderItem = ({item}: {item: IGuess}) => {
    return (
      <Touchable
        style={styles.item}
        onPress={() => {
          Alert.alert('点击详情');
        }}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
      </Touchable>
    );
  };

  keyExtractor = (item: IGuess) => item.id;

  render() {
    const {guess} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Icon name="iconlike" color={'#e94922'} size={18} />
            <Text style={styles.headLeftTitleStyle}>猜你喜欢</Text>
          </View>
          <Touchable
            style={styles.headerRight}
            onPress={() => {
              Alert.alert('点击更多');
            }}>
            <Text style={styles.headRightTitleStyle}>更多</Text>
            <Icon name="iconmore" size={10} />
          </Touchable>
        </View>

        <FlatList
          numColumns={3}
          data={guess}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />

        <Touchable style={styles.changeContainer} onPress={this.freshGuess}>
          <Text style={styles.changeTitleStyle}>换一批</Text>
          <Icon name="iconchange" color={'#666'} size={10} />
        </Touchable>
      </View>
    );
  }

  componentDidMount() {
    this.freshGuess();
  }

  freshGuess = () => {
    const {dispatch, modelNameSpace} = this.props;
    dispatch({
      type: modelNameSpace + '/fetchGuess',
    });
  };
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    marginBottom: 4,
  },
  headLeftTitleStyle: {
    color: '#333',
    fontSize: 12,
    marginBottom: 2,
    marginLeft: 4,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headRightTitleStyle: {
    color: '#333',
    fontSize: 12,
    marginBottom: 2,
    marginRight: 4,
  },
  //TODO 怎么做到只包裹内容 不占用整行
  changeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  changeTitleStyle: {
    color: '#666',
    fontSize: 12,
    marginBottom: 2,
    marginRight: 4,
  },
});

export default Connecter(Guess);
