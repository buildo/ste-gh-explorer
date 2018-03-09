import * as React from 'react';
import ScrollView from 'ScrollView';
import View from 'View';
import ResultsRow from 'ResultsRow';
import Panel from 'Panel';
import { SearchResult } from 'model';
import './resultsPanel.scss';

type Props = {
  results?: Array<SearchResult>;
};

const Placeholder = ({ message }: { message: string }) => {
  return (
    <Panel type="floating">
      <p>{message}</p>
    </Panel>
  );
};

export default class ResultsPanel extends React.PureComponent<Props> {
  getPlaceholderMessage = (): string | null => {
    const { results } = this.props;
    const isResultsUndefined = typeof results === 'undefined';
    const hasResults = results && results.length;

    if (isResultsUndefined)
      return 'Search a repo in the top bar to see the results!';
    if (!hasResults) return 'Sorry, no results for your stupid query!';
    return null;
  };
  render() {
    const { results } = this.props;
    const placeholderMessage = this.getPlaceholderMessage();

    return (
      <ScrollView className="results-panel">
        <View column grow hAlignContent="center">
          {placeholderMessage ? (
            <Placeholder message={placeholderMessage} />
          ) : (
            results &&
            results.map(result => <ResultsRow key={result.id} {...result} />)
          )}
        </View>
      </ScrollView>
    );
  }
}
