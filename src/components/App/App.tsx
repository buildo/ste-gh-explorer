/*

This component is the entry point for our app.
It must be named exactly `App` and live in the `components/App` folder.
Typical tasks performed in this component are:
- general app layout
- choosing the correct component to render based on the current view

In this simple example it does a bit of both.

*/

import * as React from 'react';
import View from 'View';

import { declareQueries } from '@buildo/bento/data';
import { CurrentView } from 'model';

import './app.scss';

class App extends React.Component<{ currentView: CurrentView }> {
  render() {
    return (
      <View column className="main">
        <div className="header">
          <h1>header</h1>
        </div>

        <View column className="content">
          <View column className="results">
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
            <h1 className="placeholder">Search in the top</h1>
          </View>
        </View>
      </View>
    );
  }
}

const queries = declareQueries(['currentView']);
export default queries(App);
