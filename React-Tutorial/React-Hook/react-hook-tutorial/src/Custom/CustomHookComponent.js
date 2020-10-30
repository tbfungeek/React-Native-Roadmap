import { useEffect, useState } from "react";
import { useAISearch } from "./useAISearch";

export function CustomHookComponent(props) {
  const [data] = useAISearch("redux");

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