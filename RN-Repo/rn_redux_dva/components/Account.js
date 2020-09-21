import React from 'react';
import { Button, Text, StyleSheet ,View} from 'react-native';
import {connect} from 'react-redux';
import { ACCOUNT_LOGOUT_ACTION_TYPE } from '../actions/types';

class Account extends React.Component {

	render() {
        const {username,asyncLogin,syncLogout} = this.props;
		return (
			<View style={styles.container}>
				<Button
					title= {!username ? "登陆":"登出"}
					onPress={() => {
						username ? syncLogout():asyncLogin();
					}}
				/>
				<Text>{username}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical:20,
    }
});

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.accountReducer.username
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        asyncLogin: () => {
            dispatch({ type: 'async/login' })
        },
        syncLogout:() => {
            dispatch({type:ACCOUNT_LOGOUT_ACTION_TYPE})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Account);
