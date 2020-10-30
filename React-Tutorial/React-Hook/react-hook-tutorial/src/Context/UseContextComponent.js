import React, { useContext } from "react";

//1. 使用createContext并传入默认值,创建一个 React的上下文
//如果匹配不到最新的 Provider 则会使用默认值，
const AppContext = React.createContext({
  username: ""
});

function ComponentA(props) {

  //4. 通过 React.createContext 创建出来的上下文，在子组件中可以通过 useContext 这个 Hook 获取 Provider 提供的内容
  //   但是useContext 需要将 Context 实例传入。这种用法会存在一个比较尴尬的地方，父子组件不在一个目录中，
  //   对于这个问题可以通过 Context Manager 统一管理上下文的实例，然后通过 export 将实例导出，在子组件中在将实例 import 进来。
  const { username } = useContext(AppContext);
  return (
    <div>
      <div>ComponentA username : {username}</div>
    </div>
  );
}

function ComponentB(props) {
  const { username } = useContext(AppContext);
  return (
    <div>
      <div>ComponentB username: {username}</div>
    </div>
  );
}

export function UseContextComponent(props) {
  

  return (
    //2. 如果要使用创建的上下文，需要通过 AppContext.Provider 最外层包装组件，
    //并且需要显示的通过 <AppContext.Provider value={{xx:xx}}> 的方式传入value，指定 context 要对外暴露的信息。
    //3. 子组件在匹配过程中只会匹配最新的 Provider，也就是说如果有下面三个组件：ContextA.Provider->A->ContexB.Provider->B->C
    //如果 ContextA 和 ContextB 提供了相同的方法，则 C 组件只会选择 ContextB 提供的方法。
    <AppContext.Provider
      value={{
        username: "tbfungeek"
      }}
    >
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    </AppContext.Provider>
  );
}
