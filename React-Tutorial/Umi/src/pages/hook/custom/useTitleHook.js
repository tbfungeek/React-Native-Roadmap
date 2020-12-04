import React, { useEffect, useState } from 'react';

export default function useTitleHook({ title }) {
  const [documentTitle, setDocumentTitle] = useState('');

  useEffect(() => {
    document.title = title;
    setDocumentTitle(title);
  }, [title]);

  return title;
}
