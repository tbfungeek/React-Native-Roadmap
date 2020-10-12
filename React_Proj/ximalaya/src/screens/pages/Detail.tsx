import React from 'react';
import {View, Text} from 'react-native';
import {DetailRouteProp} from '@/navigators/StackNavigator';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({player}: RootState) => {
  return {
    player,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  route: DetailRouteProp;
}

class Detail extends React.Component<IProps> {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/fetchPlayerInfo',
    });
  }
  render() {
    //const {route} = this.props;
    const {player} = this.props;
    console.log('=====>player', player);
    return (
      <View>
        <Text>Detail</Text>
      </View>
    );
  }
}

export default connector(Detail);
