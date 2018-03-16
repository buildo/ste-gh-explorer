const API_URL = 'https://api.github.com/';
const SEARCH_REPO_ENDPOINT = 'search/repositories';
const GET_REPO_ENDPOINT = 'repositories';
import { SearchResult } from 'model';

export const searchGithubRepo = (query: string) => {
  return fetch(API_URL + SEARCH_REPO_ENDPOINT + `?q=${query}`).then(res =>
    res.json()
  ) as Promise<Array<SearchResult>>;
};
export const searchGithubRepoByID = (ID: number) => {
  return fetch(API_URL + GET_REPO_ENDPOINT + `/${ID}`).then(res =>
    res.json()
  ) as Promise<SearchResult>;
};
