import React from 'react';
import {View} from 'react-native';
import {RootStackNavigation} from '@/navigators/StackNavigator';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import Carousel from '@/screens/pages/Home/Carousel';

const mapStateToProps = ({home, loading}: RootState) => ({
  carousel: home.carousel,
  loading: loading.effects['home/asyncAdd'],
});

const Connecter = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connecter>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/fetchCarousel',
    });
  }

  render() {
    const {carousel} = this.props;
    return (
      <View>
        <Carousel data={carousel} />
      </View>
    );
  }
}

export default Connecter(Home);
