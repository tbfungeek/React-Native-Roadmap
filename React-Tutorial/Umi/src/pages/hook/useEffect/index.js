import React, { useEffect, useState } from 'react';
import { List } from 'antd-mobile';
import {Link} from 'umi';

export default function HookUseEffect(props) {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://hn.algolia.com/api/v1/search?query=redux').then(res =>
        res.json(),
      );
      console.log(result)
      setData(result);

      return () => {
        console.log("这里会在组件卸载的时候调用")
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <List>
        {data.hits.map((item, index) => (
          <List.Item key={index}><a href={item.url}>{item.title}</a></List.Item>
        ))}
      </List>
    </div>
  );
}
