import * as React from 'react';
import View from 'View';
import NavBar from 'NavBar';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <View column className="main">
        <View basis={50} className="header" vAlignContent="center">
          <NavBar />
        </View>

        <View column className="content" grow hAlignContent="center">
          <View column className="results" grow width="100%" />
        </View>
      </View>
    );
  }
}
