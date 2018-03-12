import * as React from 'react';
import View from 'View';
import { SearchResult } from 'model';
import Button from 'Button';
import { FormattedMessage } from 'react-intl';

import './resultsRow.scss';

export default class ResultsRow extends React.PureComponent<SearchResult> {
  static defaultProps = {
    repoName: '',
    repoDescription: '',
    url: ''
  };

  onSeeMoreClick = (): void => {
    window.open(this.props.svn_url, '_blank');
  };
  render() {
    const { name, description, svn_url } = this.props;

    return (
      <View className="results-row" vAlignContent="center" width="100%">
        <View column vAlignContent="center">
          <a href={svn_url} target="_blank">
            <h1>{name}</h1>
          </a>
          <div>{description}</div>
        </View>

        <FormattedMessage id="ResultsRow.callToAction">
          {(txt: string) => (
            <Button type="default" onClick={this.onSeeMoreClick} label={txt} />
          )}
        </FormattedMessage>
      </View>
    );
  }
}
