const API_URL = 'https://api.github.com/';
const SEARCH_REPO_ENDPOINT = 'search/repositories';
import { SearchResult } from 'model';

export const getRandomName = (length: number) => {
  return fetch(`http://uinames.com/api/?minlen=${length}&maxlen=${length}`)
    .then(res => res.json())
    .then(res => {
      return `${res.name} ${res.surname}`;
    }) as Promise<string>;
};

export const searchGithubRepo = (query: string) => {
  return fetch(API_URL + SEARCH_REPO_ENDPOINT + `?q=${query}`).then(res =>
    res.json()
  ) as Promise<Array<SearchResult>>;
};
