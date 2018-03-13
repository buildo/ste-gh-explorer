/*

You may write here any type that you want to re-use in you application.

ex:

export type Foo = {
  bar: number
}

and in any file:

import { Foo } from 'model'

const foo: Foo = { bar: 5 }



Here we define a type `CurrentView` and two helper functions that are used
in the example app created by default:

*/

import { HistoryLocation } from '@buildo/bento/data';
const qs = require('query-string');
export { HistoryLocation };
export type CurrentView = {
  view: string;
  payload: {
    repo?: number;
  };
};

interface License {
  name: string;
  url: string;
}
interface Owner {
  login: string;
  avatar_url: string;
}
export interface SearchResult {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  topics: Array<string>;
  created_at: string;
  stargazers_count: number;
  stargazers_url: string;
  forks_count: string;
  forks_url: string;
  license: License;
  owner: Owner;
}
export function locationToView(location: HistoryLocation): CurrentView {
  const Location: CurrentView = { view: '', payload: {} };
  switch (location.pathname) {
    default:
      Location.view = 'home';
  }
  Location.payload = qs.parse(location.search);
  return Location;
}

export function viewToLocation(view: CurrentView): HistoryLocation {
  switch (view) {
    default:
      return { pathname: '/', search: '' };
  }
}
