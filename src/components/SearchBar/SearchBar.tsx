import * as React from 'react';
import InputChildren from 'InputChildren';
import './searchBar.scss';
import Button from 'Button';

type Props = {
  onSearchSubmit(query: string): void;
};

type State = {
  searchQuery: string;
};
export default class SearchBar extends React.PureComponent<Props, State> {
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
        <Button
          className="search-bar-input-button"
          size="tiny"
          type="flat"
          onClick={this.onSearchSubmit}
        >
          Search
        </Button>
      </InputChildren>
    );
  }
}
