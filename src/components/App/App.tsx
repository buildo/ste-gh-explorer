import * as React from 'react';
import View from 'View';
import NavBar from 'NavBar';
import ResultsPanel from 'ResultsPanel';
import './app.scss';

type State = {
  query: string;
};
export default class App extends React.Component<{}, State> {
  state = {
    query: ''
  };
  onSearchSubmit = (query: string) => {
    this.setState({ query });
  };
  render() {
    const { state: { query }, onSearchSubmit } = this;
    return (
      <View column className="app">
        <View
          basis={50}
          className="app-header"
          vAlignContent="center"
          hAlignContent="center"
        >
          <NavBar onSearchSubmit={onSearchSubmit} />
        </View>

        <View column className="app-content" grow hAlignContent="center">
          <ResultsPanel query={query} />
        </View>
      </View>
    );
  }
}
