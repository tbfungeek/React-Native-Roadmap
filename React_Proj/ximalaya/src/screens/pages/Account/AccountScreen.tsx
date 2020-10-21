import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import defaultAvatarImage from '@/assets/default_avatar.png';
import Touchable from '@/components/Common/Touchable';
import {ModelStackNavigation} from '@/navigators/StackNavigator';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({account}: RootState) => {
  return {
    user: account.user,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: ModelStackNavigation;
}

class AccountScreen extends React.Component<IProps> {
  login = () => {
    const {navigation} = this.props;
    navigation.navigate('LoginScreen');
  };

  loginOut = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'account/logOut',
    });
  };

  render() {
    const {user} = this.props;
    if (user) {
      return (
        <View style={styles.container}>
          <Image
            source={{uri: user.avatar}}
            style={styles.defaultAvatarStyle}
          />
          <View style={styles.right}>
            <Text style={styles.username}>{user.name} </Text>
            <Touchable style={styles.loginOutButton} onPress={this.loginOut}>
              <Text style={styles.loginButtonText}>退出登陆</Text>
            </Touchable>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            source={defaultAvatarImage}
            style={styles.defaultAvatarStyle}
          />
          <View style={styles.right}>
            <Touchable style={styles.loginButton} onPress={this.login}>
              <Text style={styles.loginButtonText}>立即登陆</Text>
            </Touchable>
            <Text style={styles.loginTips}>登陆后享受更多服务 ~ </Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
  },
  username: {
    color: '#333',
    fontSize: 16,
    marginLeft: 30,
  },
  defaultAvatarStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginOutButton: {
    width: 80,
    height: 26,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e94922',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 15,
  },
  loginButton: {
    width: 80,
    height: 26,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e94922',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 5,
  },
  right: {
    flex: 1,
  },
  loginButtonText: {
    color: '#e94922',
  },
  loginTips: {
    color: '#999',
    fontSize: 12,
    marginLeft: 25,
    marginTop: 10,
  },
});

export default connector(AccountScreen);
