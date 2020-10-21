import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import Touchable from '@/components/Common/Touchable';
import {RootState} from '@/model/index';
import {ConnectedProps, connect} from 'react-redux';
import * as Yup from 'yup';

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
          {({values, handleChange, handleBlur, handleSubmit, errors}) => {
            return (
              <View>
                <TextInput
                  onChangeText={handleChange('account')}
                  onBlur={handleBlur('account')}
                  value={values.account}
                />
                {errors.account && (
                  <Text style={styles.errorType}>{errors.account}</Text>
                )}
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && (
                  <Text style={styles.errorType}>{errors.password}</Text>
                )}
                <Touchable onPress={handleSubmit}>
                  <Text>登陆</Text>
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
});

export default connector(LoginScreen);
