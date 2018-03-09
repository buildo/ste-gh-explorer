import * as React from 'react';
import ScrollView from 'ScrollView';
import View from 'View';
import ResultsRow from 'ResultsRow';
import Panel from 'Panel';
import { SearchResult } from 'model';
import { FormattedMessage } from 'react-intl';

import './resultsPanel.scss';

type Props = {
  results?: Array<SearchResult>;
};

const Placeholder = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <Panel type="floating">
      <FormattedMessage id={errorMessage} />
    </Panel>
  );
};

export default class ResultsPanel extends React.PureComponent<Props> {
  getPlaceholderMessage = (): string | null => {
    const { results } = this.props;
    const isResultsUndefined = typeof results === 'undefined';
    const hasResults = results && results.length;

    if (isResultsUndefined) return 'ResultsPanel.noQuerySearched';
    if (!hasResults) return 'ResultsPanel.noResultsAvailable';
    return null;
  };
  render() {
    const { results } = this.props;
    const placeholderMessage = this.getPlaceholderMessage();

    return (
      <ScrollView className="results-panel">
        <View column grow hAlignContent="center">
          {placeholderMessage ? (
            <Placeholder errorMessage={placeholderMessage} />
          ) : (
            results &&
            results.map(result => <ResultsRow key={result.id} {...result} />)
          )}
        </View>
      </ScrollView>
    );
  }
}
