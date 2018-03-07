import * as React from 'react';
import NavBarBRC from 'NavBarBRC';
import SearchBar from 'SearchBar';

import './navBar.scss';
const left = () => {
  return <h1 className="header-name">GH-Explorer</h1>;
};

export default class NavBar extends React.Component {
  onSearchSubmit = (query: string) => {
    alert(query);
  };

  render() {
    return (
      <NavBarBRC
        className="header-content"
        content={{
          left: left(),
          center: <SearchBar onSearchSubmit={this.onSearchSubmit} />
        }}
      />
    );
  }
}
