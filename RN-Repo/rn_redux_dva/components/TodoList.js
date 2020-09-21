import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodoAction } from '../actions/todoActions';
import {VisibilityFilters} from '../globle';

const keyExtractor = (item) => item.id.toString();

class TodoList extends React.Component {
	static propTypes = {
		todos: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				text: PropTypes.string.isRequired,
				completed: PropTypes.bool.isRequired
			}).isRequired
		)
	};

	renderItems = ({ item }) => {
		const { id, text, completed } = item;
		const { toggleTodos } = this.props;
		return (
			<Todo
				key={id}
				text={text}
				completed={completed}
				onClick={() => {
					toggleTodos(id);
				}}
			/>
		);
	};
	render() {
		const { todos } = this.props;
		return <FlatList style={styles.list} keyExtractor={keyExtractor} renderItem={this.renderItems} data={todos} />;
	}
}

const getVisibleTodos = (todos, filter = VisibilityFilters.SHOW_ALL) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

const styles = StyleSheet.create({
	list: {
		flex: 1
	}
});

const mapStateToProps = (state) => {
	//这里为什么需要分成state.todoReducer
	return { todos: getVisibleTodos(state.todoReducer.todos,state.todoReducer.filter)};
};

const mapDispatchToProps = (dispatch) => {
	return { toggleTodos: (id) => dispatch(toggleTodoAction(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
