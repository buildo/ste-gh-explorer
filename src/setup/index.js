/*

This file prepares the app before rendering with React,
adding custom polyfills and setting up the `bento-data` and `react-intl` providers that
will be needed by components around the app.

You shouldn't need to edit this file.

*/

import './polyfills';

// using require to guarantee they're imported after polyfills are installed
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('components/App').default;
const queries = require('queries');
const commands = require('commands');
const { makeDataProvider } = require('@buildo/bento/data');
const { IntlProvider } = require('@buildo/bento/utils');
const { loadLocale } = require('./loadLocale');

require('./addDeviceClassName');
require('theme');

const DataProvider = makeDataProvider(queries, commands);

export function main(mountNode) {
  ReactDOM.render((
    <IntlProvider loadLocale={loadLocale} locale='it'>
      <DataProvider>
        {() => <App />}
      </DataProvider>
    </IntlProvider>
  ), mountNode);
}
