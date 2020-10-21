import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Touchable from '@/components/Common/Touchable';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';
import Authorized from '@/components/Login/Authorized';

const mapStateToProps = ({account}: RootState) => {
  return {
    user: account.user,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class AccountScreen extends React.Component<ModelState> {
  loginOut = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'account/logOut',
    });
  };

  render() {
    const {user} = this.props;
    return (
      <Authorized>
        <View style={styles.container}>
          <Image
            source={{uri: user?.avatar}}
            style={styles.defaultAvatarStyle}
          />
          <View style={styles.right}>
            <Text style={styles.username}>{user?.name} </Text>
            <Touchable style={styles.loginOutButton} onPress={this.loginOut}>
              <Text style={styles.loginButtonText}>退出登陆</Text>
            </Touchable>
          </View>
        </View>
      </Authorized>
    );
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
