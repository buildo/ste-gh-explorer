import * as React from 'react';
import View from 'View';
import { SearchResult } from 'model';
import './resultsRow.scss';

export default class ResultsRow extends React.PureComponent<SearchResult> {
  static defaultProps = {
    repoName: '',
    repoDescription: '',
    url: ''
  };
  render() {
    const { repoName, repoDescription } = this.props;

    return (
      <View className="results-row" vAlignContent="center" width="100%">
        <View column vAlignContent="center">
          <p>{repoName}</p>
          <p>{repoDescription}</p>
        </View>

        <button>See more </button>
      </View>
    );
  }
}
