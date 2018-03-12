/*

In this file we can define all the bento-data queries that are needed in our app.

A few basic ones come out of the box with bento-data: you can see an example of using the
`location` query below.

*/

import { Query, available, location } from '@buildo/bento/data';
import * as API from 'API';
import * as t from 'io-ts';
import { locationToView } from 'model';

export { location };

export const currentView = Query({
  // required `id` of the query, components can refer to this via its id
  id: 'currentView',

  // depends on the `location` query (waits its result before `fetch()`ing)
  dependencies: { location: { query: location } },

  // `fetch()` receives in input the declared `dependencies` and
  // just maps the location into our custom domain model `CurrentView`
  fetch: ({ location }) => Promise.resolve(locationToView(location))
});

export const searchGithubRepoQuery = Query({
  id: 'searchGithubRepo',
  cacheStrategy: available,

  params: {
    query: t.string
  },

  fetch: ({ query }) => {
    if (query.trim().length) {
      return API.searchGithubRepo(query);
    }

    return Promise.resolve({ error: 'noQuery' });
  }
});

export const randomName = Query({
  // required `id` of the query, components can refer to this via its id
  id: 'randomName',

  // using the `available` cache strategy means this value will be cached in memory
  // indefinitely after it is fetched for the first time
  cacheStrategy: available,

  // define the input params the query requires in order to `fetch()`
  params: {
    length: t.number
  },

  // `fetch()` receives in input the input `params` and
  // delegates the actual API call the a dedicated API method
  fetch: ({ length }) => API.getRandomName(length)
});
