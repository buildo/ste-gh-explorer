import * as React from 'react';
import InputChildren from 'InputChildren';
import './searchBar.scss';
import Button from 'Button';
import { FormattedMessage } from 'react-intl';
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

  onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      this.onSearchSubmit();
    }
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
          className: 'search-bar'
        }}
        onChange={this.onSearchChange}
        onKeyUp={this.onKeyUp}
      >
        <FormattedMessage id="SearchBar.buttonLabel">
          {(txt: string) => (
            <Button
              className="search-bar-button"
              label={txt}
              size="tiny"
              type="flat"
              onClick={this.onSearchSubmit}
            />
          )}
        </FormattedMessage>
      </InputChildren>
    );
  }
}
