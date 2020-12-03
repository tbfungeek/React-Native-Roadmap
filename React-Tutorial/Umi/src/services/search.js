function getSearchResult(value) {
  return fetch('/api/search')
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
}

function getAsyncSearchResult(value) {
  return fetch(`/api/asyncSearch?value=${value}`)
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
}

export { getSearchResult, getAsyncSearchResult };
