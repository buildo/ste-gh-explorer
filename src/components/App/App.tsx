import * as React from 'react';
import View from 'View';
import NavBar from 'NavBar';
import ResultsPanel from 'ResultsPanel';
import { SearchResult } from 'model';
import './app.scss';

const dummySearchResults: SearchResult = {
  repoName: 'gh-explorer',
  repoDescription: 'A dummy repo',
  url: 'https://www.google.it'
};

export default class App extends React.Component {
  render() {
    return (
      <View column className="app">
        <View
          basis={50}
          className="app-header"
          vAlignContent="center"
          hAlignContent="center"
        >
          <NavBar />
        </View>

        <View column className="app-content" grow hAlignContent="center">
          <ResultsPanel
            results={[
              dummySearchResults,
              dummySearchResults,
              dummySearchResults,
              dummySearchResults,
              dummySearchResults,
              dummySearchResults,
              dummySearchResults,
              dummySearchResults,
              dummySearchResults,
              dummySearchResults,
              dummySearchResults
            ]}
          />
        </View>
      </View>
    );
  }
}
