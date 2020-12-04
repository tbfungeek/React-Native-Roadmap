import React, { useState } from 'react';
import useTitleHook from './useTitleHook';
import useHttpHook from './useHttpHooks';
import { List } from 'antd-mobile';

export default function Index(props) {
  const title = useTitleHook({ title: '自定义Title' });

  const [result, loading] = useHttpHook({
    url: 'https://hn.algolia.com/api/v1/search?query=redux',
    method: 'GET',
  });

  return (
    <div>
      {loading ? (
        <div>加载中....</div>
      ) : (
        <List>
        {result.hits.map((item, index) => (
          <List.Item key={index}><a href={item.url}>{item.title}</a></List.Item>
        ))}
      </List>
      )}
    </div>
  );
}
