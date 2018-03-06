/*

This components reuses two other "basic" components that we defined in our
app's `components` folder: View and Dropdown.

It also reads and updates the `CurrentView` data state we defined,
using the dedicated query, command, helpers and types defined respecitvely in
`queries`, `commands` and `model`.

*/

import * as React from 'react';
import View from 'components/View';
import Dropdown from 'components/Dropdown';
import { declareQueries, declareCommands } from '@buildo/bento/data';
import { HistoryLocation, viewToLocation, CurrentView } from 'model';

type Props = {
  currentView: CurrentView,
  doUpdateLocation: (l: Partial<HistoryLocation>) => Promise<void>
}

const dropdownOptions = [{
  value: 'home', label: 'Home'
}, {
  value: 'hello', label: 'Hello',
}];

class SwitchViewDropdown extends React.Component<Props> {
  onChange = (value: CurrentView) => {
    this.props.doUpdateLocation(viewToLocation(value))
  }

  render() {
    return (
      <View className='switch-view-dropdown'>
        <Dropdown
          options={dropdownOptions}
          value={this.props.currentView}
          onChange={this.onChange}
        />
      </View>
    );
  }
}

const queries = declareQueries(['currentView']);
const commands = declareCommands(['doUpdateLocation']);
export default queries(commands(SwitchViewDropdown)) as any as React.ComponentType<{}>;