import React from 'react';
import {StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {RootState} from '@/model/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({category}: RootState) => {
  return {
    isEdit: category.isEdit,
  };
};

const Connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof Connector>;

interface IProps extends ModelState {
  onSubmit: () => void;
}

class HeaderRightButton extends React.Component<IProps> {
  render() {
    const {isEdit, onSubmit} = this.props;
    return (
      <HeaderButtons>
        <Item
          title={isEdit ? '完成' : '编辑'}
          onPress={onSubmit}
          buttonStyle={styles.headerButtonStyle}
        />
      </HeaderButtons>
    );
  }
}

const styles = StyleSheet.create({
  headerButtonStyle: {
    color: '#fff',
  },
});

export default Connector(HeaderRightButton);
