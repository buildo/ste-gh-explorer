/*

This component is the entry point for our app.
It must be named exactly `App` and live in the `components/App` folder.
Typical tasks performed in this component are:
- general app layout
- choosing the correct component to render based on the current view

In this simple example it does a bit of both.

*/

import * as React from 'react';
import View from 'View';
import SwitchViewDropdown from 'SwitchViewDropdown';
import Hello from 'Hello';
import { declareQueries } from '@buildo/bento/data';
import { CurrentView } from 'model';

import './app.scss';

class App extends React.Component<{ currentView: CurrentView }> {
  render() {
    return (
      <View column className='app'>
        <h1>Bento App</h1>
        <SwitchViewDropdown />
        {this.props.currentView === 'hello' && <Hello />}
      </View>
    );
  }
}

const queries = declareQueries(['currentView']);
export default queries(App);