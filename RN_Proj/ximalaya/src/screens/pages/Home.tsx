import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({home}: RootState) => ({
  num: home.num,
});

const Connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connecter>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  handlePress = () => {
    //const {navigation} = this.props;
    //navigation.navigate('Detail', {id: 100});
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {num: 10},
    });
  };

  render() {
    const {num} = this.props;
    return (
      <View>
        <Text>Home{num}</Text>
        <Button title="执行加10操作" onPress={this.handlePress} />
      </View>
    );
  }
}

export default Connecter(Home);
