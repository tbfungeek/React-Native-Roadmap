import { useEffect, useState } from "react";
import Axios from "axios";

function UseEffectDemo1(props) {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

function UseEffectDemo2(props) {
  
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  //如果有多个副效应，应该调用多个useEffect()，而不应该合并写在一起。
  useEffect(() => {
    const timerA = setTimeout(() => {
      setVarA(varA + 1);
    }, 1000);

    // 副效应是随着组件加载而发生的，那么组件卸载时，可能需要清理这些副效应。
    // useEffect()允许返回一个函数，在组件卸载时，执行该函数，清理副效应。如果不需要清理副效应，useEffect()就不用返回任何值。
    return () => {
      clearTimeout(timerA);
    };
  }, [varA]);

  useEffect(() => {
    const timerB = setTimeout(() => {
      setVarB(varB + 1);
    }, 2000);

    return () => {
      clearTimeout(timerB);
    };
  }, [varB]);

  return (
    <div>
      <h1>Current A timmer Times {varA}</h1>
      <h1>Current B timmer Times {varB}</h1>
    </div>
  );
}

export function UseEffectComponent(props) {
  //只要是副效应，都可以使用useEffect()引入。它的常见用途有下面几种。
  //获取数据（data fetching）
  //事件监听或订阅（setting up a subscription）
  //改变 DOM（changing the DOM）
  //输出日志（logging）
  //useEffect()的作用就是指定一个副效应函数，[组件每渲染一次，该函数就自动执行一次]。[组件首次在网页 DOM 加载后，副效应函数也会执行]。
  //useEffect()的第二个参数是一个数组，指定了第一个参数（副效应函数）的依赖项。只有该变量发生变化时，副效应函数才会执行。
  //如果第二个参数是一个空数组，就表明副效应参数没有任何依赖项。因此，副效应函数这时只会在组件加载进入 DOM 后执行一次，后面组件重新渲染，就不会再次执行。
  useEffect(() => {
    document.title = "加载完成 ... " + props.name;
  }, [props.name]);
  return (
    <div>
      <h1>Hello , {props.name}</h1>
      <UseEffectDemo1 />
      <UseEffectDemo2 />
    </div>
  );
}
