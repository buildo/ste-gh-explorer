import * as React from 'react';
import InputChildren from 'InputChildren';
const buttonStyle = {
  height: 32,
  borderWidth: '0 0 0 1px',
  borderRadius: '0px 4px 4px 0px',
  marginRight: 1,
  fontSize: '14px'
};
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
          className: 'input-children',
          style: { overflow: 'hidden' }
        }}
        onChange={this.onSearchChange}
      >
        <button style={buttonStyle} onClick={this.onSearchSubmit}>
          Button label
        </button>
      </InputChildren>
    );
  }
}
