import * as React from 'react';
import View from 'View';
import NavBar from 'NavBar';
import ResultsPanel from 'ResultsPanel';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <View column className="app">
        <View
          basis={50}
          className="header"
          vAlignContent="center"
          hAlignContent="center"
        >
          <NavBar />
        </View>

        <View column className="content" grow hAlignContent="center">
          <View column className="results" grow width="100%">
            <ResultsPanel results={[]} />
          </View>
        </View>
      </View>
    );
  }
}
