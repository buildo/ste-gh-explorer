import * as React from 'react';
import View from 'View';
import NavBar from 'NavBar';
import ResultsPanel from 'ResultsPanel';
import { SearchResult } from 'model';
import './app.scss';

const DummySearchResults: Array<SearchResult> = Array(10)
  .fill(0)
  .map((_, i: number): SearchResult => ({
    id: i,
    id_str: i.toString(),
    repoName: 'gh-explorer',
    repoDescription: 'A dummy repo',
    url: 'https://www.google.it'
  }));

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
          <ResultsPanel results={DummySearchResults} />
        </View>
      </View>
    );
  }
}
