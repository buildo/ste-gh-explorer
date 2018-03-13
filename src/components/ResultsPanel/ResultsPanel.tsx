import * as React from 'react';
import ScrollView from 'ScrollView';
import View from 'View';
import ResultsRow from 'ResultsRow';
import Panel from 'Panel';
import LoadingSpinner from 'LoadingSpinner';
import { SearchResult } from 'model';
import { FormattedMessage } from 'react-intl';

import './resultsPanel.scss';
import { declareQueries } from '@buildo/bento/data';

type Props = {
  searchGithubRepo?: {
    items: Array<SearchResult>;
    error?: string;
  };
  readyState: {
    searchGithubRepo: {
      loading: boolean;
    };
  };
};

const Placeholder = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <Panel type="floating">
      <FormattedMessage id={errorMessage} />
    </Panel>
  );
};

class ResultsPanel extends React.PureComponent<Props> {
  getPlaceholderMessage = (): string | null => {
    const { searchGithubRepo, readyState } = this.props;
    const noQuery = searchGithubRepo && searchGithubRepo.error == 'noQuery';
    const hasResults =
      searchGithubRepo &&
      searchGithubRepo.items &&
      searchGithubRepo.items.length;

    if (noQuery) return 'ResultsPanel.noQuerySearched';
    if (!hasResults && !readyState.searchGithubRepo.loading)
      return 'ResultsPanel.noResultsAvailable';
    return null;
  };
  render() {
    const {
      searchGithubRepo,
      readyState: { searchGithubRepo: { loading } }
    } = this.props;
    const placeholderMessage = this.getPlaceholderMessage();

    if (loading) {
      return (
        <View grow className="results-panel results-panel-loading">
          <LoadingSpinner />
        </View>
      );
    }
    return (
      <ScrollView className="results-panel">
        <View column grow hAlignContent="center">
          {placeholderMessage ? (
            <Placeholder errorMessage={placeholderMessage} />
          ) : (
            searchGithubRepo &&
            searchGithubRepo.items.map(result => (
              <ResultsRow key={result.id} result={result} />
            ))
          )}
        </View>
      </ScrollView>
    );
  }
}

const queries = declareQueries(['searchGithubRepo']);
export default (queries(ResultsPanel) as any) as React.ComponentType<{
  query: string;
}>;
