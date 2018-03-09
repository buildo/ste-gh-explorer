import * as React from 'react';
import View from 'View';
import { SearchResult } from 'model';
import Button from 'Button';

import './resultsRow.scss';

export default class ResultsRow extends React.PureComponent<SearchResult> {
  static defaultProps = {
    repoName: '',
    repoDescription: '',
    url: ''
  };

  onSeeMoreClick = (): void => {
    console.log('See more from: ', this.props.repoName);
  };
  render() {
    const { repoName, repoDescription } = this.props;

    return (
      <View className="results-row" vAlignContent="center" width="100%">
        <View column vAlignContent="center">
          <p>{repoName}</p>
          <p>{repoDescription}</p>
        </View>

        <Button type="default" onClick={this.onSeeMoreClick}>
          See more
        </Button>
      </View>
    );
  }
}
