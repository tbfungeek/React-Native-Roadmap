import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({home, loading}: RootState) => ({
  num: home.num,
  loading: loading.effects['home/asyncAdd'],
});

const Connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connecter>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  syncAdd = () => {
    //const {navigation} = this.props;
    //navigation.navigate('Detail', {id: 100});
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {num: 10},
    });
  };

  asyncAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {num: 2},
    });
  };

  render() {
    const {num, loading} = this.props;
    return (
      <View>
        <Text>{loading ? '正在加载中' : num}</Text>
        <Button title="执行同步加10操作" onPress={this.syncAdd} />
        <Button title="执行异步加2操作" onPress={this.asyncAdd} />
      </View>
    );
  }
}

export default Connecter(Home);
