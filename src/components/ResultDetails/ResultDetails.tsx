import * as React from 'react';
import { modalWithContext } from 'Modal';

import View from 'View';
import LoadingSpinner from 'LoadingSpinner';
import { declareQueries } from '@buildo/bento/data';
import { SearchResult } from 'Model';
import { FormattedMessage } from 'react-intl';
import * as PropTypes from 'prop-types';

import './resultDetails.scss';
const ReactINTLContextType = PropTypes.object.isRequired;

const ResultsDetailsModal = modalWithContext({
  intl: ReactINTLContextType
});
type Props = {
  onDialogClose(): void;
} & (
  | {
      readyState: {
        searchGithubRepoByID: {
          loading: false;
        };
      };
      searchGithubRepoByID: SearchResult;
    }
  | {
      readyState: {
        searchGithubRepoByID: {
          loading: true;
        };
      };
      searchGithubRepoByID: undefined;
    });
type State = {};

class ResultDetails extends React.PureComponent<Props, State> {
  render() {
    const { onDialogClose, searchGithubRepoByID, readyState } = this.props;
    if (readyState.searchGithubRepoByID.loading)
      return (
        <div className="result-details-loading">
          <LoadingSpinner />
        </div>
      );

    const {
      description,
      name,
      html_url,
      stargazers_count,
      stargazers_url,
      forks_count,
      forks_url,
      license,
      owner
    } = searchGithubRepoByID as SearchResult;

    return (
      <ResultsDetailsModal
        transitionEnterTimeout={500}
        transitionLeaveTimeout={0}
        onDismiss={onDialogClose}
        className="result-details"
      >
        <View column grow className="result-details-content">
          <View vAlignContent="center">
            <View grow column style={{ justifyContent: 'space-between' }}>
              <a href={html_url}>
                <div className="repo-name">{name}</div>
              </a>
              <div className="repo-owner">{owner.login}</div>
            </View>
            <a href={html_url} target="_blank">
              <img
                className="repo-owner-image"
                src={owner.avatar_url}
                alt="avatar"
              />
            </a>
          </View>
          <div className="repo-description">{description}</div>

          <View grow className="repo-action">
            <a href={stargazers_url} target="_blank">
              <div>
                <FormattedMessage
                  id="ResultsDetails.star"
                  values={{ stars: stargazers_count }}
                />
              </div>
            </a>
            <a href={forks_url} target="_blank">
              <FormattedMessage
                id="ResultsDetails.fork"
                values={{ fork: forks_count }}
              />
            </a>
            {license && (
              <a href={license.url} target="_blank">
                <FormattedMessage
                  id="ResultsDetails.license"
                  values={{ license: license.name }}
                />
              </a>
            )}
          </View>
        </View>
      </ResultsDetailsModal>
    );
  }
}
const queries = declareQueries(['searchGithubRepoByID']);
export default (queries(ResultDetails) as any) as React.ComponentType<{
  ID: number;
  query: string;
  onDialogClose(): void;
}>;
