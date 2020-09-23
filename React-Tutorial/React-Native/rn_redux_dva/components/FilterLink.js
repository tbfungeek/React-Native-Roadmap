import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {connect} from 'react-redux';
import { setVisibilityFilterAction } from '../actions/todoActions';

import PropTypes from 'prop-types';

class FilterLink extends React.Component {
	static propTypes = {
		active: PropTypes.bool,
        filter: PropTypes.string,
        title:PropTypes.string.isRequired,
	};

	static defaultProps = {
		active: true,
	};

	render() {
        const { active, visibleFilter, setFilter ,title} = this.props;
        
		return (
			<TouchableOpacity onPress={
                () => {
                    setFilter(visibleFilter)
                }
            }>
				<Text style={{ fontSize: 10, color: active ? 'black' : '#cccccc' }}>{title}</Text>
			</TouchableOpacity>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
        filter: state.todoReducer.filter ? state.todoReducer.filter : ownProps.filter
    }
}
const mapDispatchToProps = (dispatch) => {
	return {setFilter: (filter) => dispatch(setVisibilityFilterAction(filter))};
};

export default connect(mapStateToProps,mapDispatchToProps)(FilterLink);