import React, { useEffect, useState } from 'react';
import { Toast } from 'antd-mobile';

export default function useHttpHooks({
  url,
  method = 'POST',
  headers = [],
  body = {},
  watch = [],
}) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  async function Http() {
    setLoading(true);

    const defaultHeader = {
      'Content-type': 'application/json',
    };

    let params;
    if (method.toUpperCase() === 'GET') {
      params = undefined;
    } else {
      params = {
        headers: {
          ...defaultHeader,
          headers,
        },
        method,
        body: JSON.stringify(body),
      };
    }

    return new Promise((resolve, reject) => {
      fetch(url, params)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (res) {
            resolve(res);
            setResult(res);
          }
        })
        .catch(err => {
          Toast.fail(err);
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }

  useEffect(() => {
    Http();
  }, watch);

  return [result, loading];
}
