import * as React from 'react';
import ScrollView from 'ScrollView';
import View from 'View';
import ResultsRow from 'ResultsRow';

import './resultsPanel.scss';

type Props = {
  results: Array<Object>;
};

const Placeholder = ({ message }: { message: string }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};
export default class ResultsPanel extends React.PureComponent<Props> {
  render() {
    const { results } = this.props;
    const isResultsUndefined = typeof results === 'undefined';
    const hasResults = results.length;
    if (isResultsUndefined) {
      return (
        <Placeholder message="Search a repo in the top bar to see the results!" />
      );
    }
    if (hasResults) {
      return <Placeholder message="Sorry, no result for your stupid query!" />;
    }
    return (
      <ScrollView>
        <View column hAlignContent="center" className="results-panel">
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
          <ResultsRow />
        </View>
      </ScrollView>
    );
  }
}
