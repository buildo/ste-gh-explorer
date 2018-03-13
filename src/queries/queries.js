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

export const searchGithubRepo = Query({
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

export const searchGithubRepoByID = Query({
  id: 'searchGithubRepoByID',
  cacheStrategy: available,
  dependencies: {
    results: {
      query: searchGithubRepo
    }
  },
  params: {
    results: t.any,
    query: t.string,
    ID: t.union([t.number, t.string])
  },

  fetch: ({ results, ID }) => {
    const item = results.items && results.items.filter(e => e.id === ID);
    if (item && item.length) {
      return Promise.resolve(item[0]);
    } else {
      return API.searchGithubRepoByID(ID);
    }
  }
});
