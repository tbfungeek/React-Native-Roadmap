export function getSearchResult(value) {
  return fetch('/api/search')
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}
