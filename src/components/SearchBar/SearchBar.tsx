import * as React from 'react';
import InputChildren from 'InputChildren';
import './searchBar.scss';

export default class SearchBar extends React.PureComponent<{
  onSearchSubmit(query: string): void;
}> {
  state = {
    searchQuery: ''
  };

  onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  onSearchSubmit = () => {
    const { searchQuery } = this.state;

    if (searchQuery && searchQuery.trim().length) {
      this.props.onSearchSubmit(searchQuery);
    }
  };

  render() {
    return (
      <InputChildren
        wrapper={{
          className: 'search-bar-input'
        }}
        onChange={this.onSearchChange}
      >
        <button
          className="search-bar-input-button"
          onClick={this.onSearchSubmit}
        >
          Button label
        </button>
      </InputChildren>
    );
  }
}
