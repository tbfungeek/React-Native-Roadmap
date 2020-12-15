import React from 'react';
import {connect} from "react-redux";;
import {Provider} from 'react-redux';
import createReducerStore from '../store/store';

//判断是否是服务端渲染
const isServer = typeof window === 'undefined';
//缓存store
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE_';

const getOrCreateStore = (initialState) => {
    //如果是服务端渲染每次都创建新的store
    if (isServer) {
        return createReducerStore(initialState);
    }
    //如果是客户端渲染取上一次缓存中的
    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = createReducerStore(initialState);
    }
    return window[__NEXT_REDUX_STORE__];
}

//HOC 模式 这里一般包含 mapStateToProps,mapDispatchToProps
export default function withReducer(...args) {

    //这里是目标组件
    return function CreateNextPage(Component) {

        const ComponentWithReducer = (props = {}) => {
            const {store, initialProps, initialState} = props;
            //将组件与Reducer相连
            const ConnectedComponent = connect(...args)(Component);

            return React.createElement(
                Provider,
                {store: store && store.dispatch ? store: getOrCreateStore(initialState)},
                React.createElement(ConnectedComponent,initialProps)
            )
        };

        ComponentWithReducer.getInitialProps = async (props = {}) => {

            //最初创建store的地方
            //在getInitialProps 方法之前就已经有store对象了
            const store = getOrCreateStore(props.req);
          
            //这里是调用getInitialProps之后的Props
            const initialProps = Component.getInitialProps
                ? await Component.getInitialProps({ ...props, isServer, store }) : {};
            
            console.log(Component)

            return {
                store,
                initialProps,
                initialState: store.getState(),
            };
        };
        return ComponentWithReducer;
    };
}