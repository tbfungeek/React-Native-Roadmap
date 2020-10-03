import {extend} from 'lodash';
import React from 'react';
import {} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

class HeaderRightButton extends React.Component {
  render() {
    return (
      <HeaderButtons>
        <Item title="编辑" />
      </HeaderButtons>
    );
  }
}

export default HeaderRightButton;
