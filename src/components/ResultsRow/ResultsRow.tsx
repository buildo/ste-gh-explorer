import * as React from 'react';
import View from 'View';
import './resultsRow.scss';

export default class ResultsRow extends React.PureComponent {
  render() {
    return (
      <View
        className="results-row"
        vAlignContent="center"
        hAlignContent="center"
        width="100%"
      >
        <View column vAlignContent="center">
          <p>Repo name</p>
          <p>Lorem ipsum</p>
        </View>

        <div className="d">See more</div>
      </View>
    );
  }
}
