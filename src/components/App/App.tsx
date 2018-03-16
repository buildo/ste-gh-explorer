import * as React from 'react';
import View from 'View';
import NavBar from 'NavBar';
import ResultsPanel from 'ResultsPanel';
import ResultDetails from 'ResultDetails';

import './app.scss';
import { declareQueries, declareCommands } from '@buildo/bento/data';
import { CurrentView } from 'model';

type State = {
  query: string;
};
type Props = {
  currentView: CurrentView;
  doUpdateLocation(location: {
    pathname: string | undefined;
    search: string | undefined;
  }): void;
};

class App extends React.Component<Props, State> {
  state: State = {
    query: ''
  };
  onSearchSubmit = (query: string) => {
    this.setState({ query });
  };

  onDialogClose = () => {
    this.props.doUpdateLocation({ pathname: '/', search: '' });
  };

  renderModal = () => {
    const { currentView } = this.props;
    if (currentView && currentView.view === 'details') {
      return (
        <ResultDetails
          query={this.state.query}
          ID={currentView.repo}
          onDialogClose={this.onDialogClose}
        />
      );
    }
    return null;
  };

  render() {
    const { state, onSearchSubmit, renderModal } = this;

    return (
      <View column className="app">
        {renderModal()}
        <View
          basis={50}
          className="app-header"
          vAlignContent="center"
          hAlignContent="center"
        >
          <NavBar onSearchSubmit={onSearchSubmit} />
        </View>

        <View column className="app-content" grow hAlignContent="center">
          <ResultsPanel query={state.query} />
        </View>
      </View>
    );
  }
}

const queries = declareQueries(['currentView']);
const command = declareCommands(['doUpdateLocation']);

export default command(queries(App));
