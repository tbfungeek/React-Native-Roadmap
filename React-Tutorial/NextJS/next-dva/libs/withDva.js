import React from 'react';
import dva, { connect } from 'dva-no-router';
import { Provider } from 'react-redux';
import model from '../model/index';

//判断是否是服务器渲染
const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]';

//客户端渲染会缓存值
const __NEXT_DVA_STORE__ =  '__NEXT_DVA_STORE__'

/**
 * 创建Dva Store
 * @param {*} initialState 
 */
function createDvaStore(initialState) {
  let app;
  //创建dva对象
  if (initialState) {
    app = dva({
      initialState,
    });
  } else {
    app = dva({});
  }
  //注册model
  const isArray = Array.isArray(model);
  if (isArray) {
    model.forEach((m) => {
      app.model(m);
    });
  } else {
    app.model(model);
  }

  app.router(() => {});
  app.start();
  const store = app._store
  return store;
}

/**
 * 服务端渲染，客户端渲染区分策略创建store
 * @param {*} initialState 
 */
function getOrCreateStore(initialState) {
  const isServer = checkServer();
  if (isServer) { 
    return createDvaStore(initialState);
  }
  if (!window[__NEXT_DVA_STORE__]) {
    window[__NEXT_DVA_STORE__] = createDvaStore(initialState);
  }
  return window[__NEXT_DVA_STORE__];
}

export default function withDva(...args) {

  return function CreateNextPage(Component) {

    const ComponentWithDva = (props = {}) => {
      //取出getInitialProps 中获取到的 store, initialProps, initialState
      const { store, initialProps, initialState } = props;
      //调用connect连接到dva
      const ConnectedComponent = connect(...args)(Component);
      return React.createElement(
        Provider,
        { store: store && store.dispatch ? store : getOrCreateStore(initialState) },
        React.createElement(ConnectedComponent, initialProps),
      );
    };

    //会先跑这里
    ComponentWithDva.getInitialProps = async (props = {}) => {
      const isServer = checkServer();
      const store = getOrCreateStore(props.req);
      //调用组件的getInitialProps然后传入ComponentWithDva 作为 props
      const initialProps = Component.getInitialProps
        ? await Component.getInitialProps({ ...props, isServer, store })
        : {};
      return {
        store,
        initialProps,
        initialState: store.getState(),
      };
    };
    return ComponentWithDva;
  };
}