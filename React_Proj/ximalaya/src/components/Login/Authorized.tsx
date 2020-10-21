import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Touchable from '../Common/Touchable';
import defaultAvatarImage from '@/assets/default_avatar.png';
import {navigate} from '@/utils/utils';

interface IProps {
  authority?: boolean;
  notLoginElement?: JSX.Element;
}

class Authorized extends React.Component<IProps> {
  login = () => {
    navigate('LoginScreen');
  };
  render() {
    const {authority, children} = this.props;
    if (authority) {
      return children;
    }
    return this.renderNotLoginElement();
  }

  renderNotLoginElement = () => {
    if (this.props.notLoginElement) {
      return <View>this.props.notLoginElement()</View>;
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
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
  },
  defaultAvatarStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#fff',
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

export default Authorized;
