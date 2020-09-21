import { takeEvery, call, put } from 'redux-saga/effects';
import { ACCOUNT_LOGIN_ACTION_TYPE } from '../actions/types';

function mockLoginRequest(method,path,username) {
    return new Promise((resolve) => {
        console.info("request : ==> ",method,path, username);
        setTimeout(() => {
            resolve({username})
        }, 1000);
    })
}

function *asyncLogin() {
    //调用mockLoginRequest方法并将call之后的参数传递给mockLoginRequest，之后返回user，这里call的方法可以是异步也可以是同步
    let user = yield call(mockLoginRequest, "PUT", "/api/login","linxiaohai");
    //调用put方法发送一个type为async/login的action将返回参数传递出去
    yield put({type:ACCOUNT_LOGIN_ACTION_TYPE,payloads:user})
}

//每次有asyncLogin的请求来的时候，就会调用asyncLogin方法
function *mySaga() {
    yield takeEvery("async/login",asyncLogin)
}

export default mySaga;
