import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
var data = require('./initData')


const todos = data.init();


export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			todos
		};
	}

	render() {
		return (
			<div>
				<h1>React ToDos App </h1>
				<CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
				<TodosList 
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
			</div>
		);
	}

	toggleTask(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		localStorage.setItem('todos', JSON.stringify(todos));
		this.setState({ todos:this.state.todos }); 
	}

	createTask(task){
		todos.push({
			task,
			isCompleted: false
		});
		localStorage.setItem('todos', JSON.stringify(todos));
		this.setState({todos: todos});
	}

	saveTask(oldTask,newTask){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		localStorage.setItem('todos', JSON.stringify(todos));
		this.setState({ todos: todos });
	}

	deleteTask(taskToDelete) {
		_.remove(todos, todo => todo.task === taskToDelete);
		localStorage.setItem('todos', JSON.stringify(todos));
		this.setState({ todos: todos});

	}
}