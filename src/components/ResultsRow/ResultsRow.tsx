import * as React from 'react';
import View from 'View';
import { SearchResult } from 'model';
import Button from 'Button';
import { FormattedMessage } from 'react-intl';

import './resultsRow.scss';
import { declareCommands } from '@buildo/bento/data';

type Props = {
  result: SearchResult;
  doUpdateLocation(location: {
    pathname: string | undefined;
    search: string | undefined;
  }): void;
};
class ResultsRow extends React.PureComponent<Props> {
  static defaultProps = {
    repoName: '',
    repoDescription: '',
    url: ''
  };

  onSeeMoreClick = (): void => {
    this.props.doUpdateLocation({
      pathname: `/details?repo=${this.props.result.id}`,
      search: ''
    });
  };
  render() {
    const { result: { name, description, html_url } } = this.props;

    return (
      <View className="results-row" vAlignContent="center" width="100%">
        <View column vAlignContent="center">
          <a href={html_url} target="_blank">
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

const commands = declareCommands(['doUpdateLocation']);
export default commands(ResultsRow);
