import * as React from 'react';
import NavBarBRC from 'NavBarBRC';
import SearchBar from 'SearchBar';
import { FormattedMessage } from 'react-intl';

import './navBar.scss';
const left = () => {
  return (
    <h1 className="nav-bar-header-name">
      <FormattedMessage id="NavBar.appName" />
    </h1>
  );
};

export default class NavBar extends React.Component {
  onSearchSubmit = (query: string) => {
    alert(query);
  };

  render() {
    return (
      <NavBarBRC
        className="nav-bar-header"
        content={{
          left: left(),
          center: <SearchBar onSearchSubmit={this.onSearchSubmit} />
        }}
      />
    );
  }
}
