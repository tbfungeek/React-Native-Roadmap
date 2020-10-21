import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {Field, Formik} from 'formik';
import Touchable from '@/components/Common/Touchable';
import {RootState} from '@/model/index';
import {ConnectedProps, connect} from 'react-redux';
import * as Yup from 'yup';
import Input from '@/components/Login/Input';

interface Values {
  account: string;
  password: string;
}

const initialValues: Values = {
  account: '',
  password: '',
};

const mapStateToProps = ({loading}: RootState) => {
  return {
    loading: loading.effects['account/login'],
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

const validationSchema = Yup.object().shape({
  account: Yup.string().trim().required('请输入您的账号'),
  password: Yup.string().trim().required('请输入密码'),
});

interface IProps extends ModelState {}

class LoginScreen extends React.Component<IProps> {
  onSubmit = (values: Values) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'account/login',
      payload: values,
    });
  };
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles.logo}>听书</Text>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={this.onSubmit}>
          {({handleSubmit}) => {
            return (
              <View>
                <Field
                  name="account"
                  component={Input}
                  placeholder="请输入账号"
                />
                <Field
                  name="password"
                  component={Input}
                  secureTextEntry
                  placeholder="请输入密码"
                />
                <Touchable onPress={handleSubmit} style={styles.loginBtn}>
                  <Text style={styles.loginBtnText}>登陆</Text>
                </Touchable>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  errorType: {
    color: '#ff4000',
    marginTop: 10,
  },
  logo: {
    color: '#ff4000',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 40,
  },
  loginBtn: {
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ff4000',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 20,
  },
  loginBtnText: {
    color: '#ff4000',
    fontWeight: 'bold',
  },
});

export default connector(LoginScreen);
