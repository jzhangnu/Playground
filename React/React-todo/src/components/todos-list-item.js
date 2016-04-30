import React from 'react';

export default class TodosListItem extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isEditing: false
		};
	}

	rederTaskSection(){
		const { task, isCompleted } = this.props;
		const taskStyle = {
			'textDecoration': isCompleted? 'line-through' : 'none',
			'width':'50%',
			'fontSize':'20px',
			color:isCompleted?'rgba(105, 128, 82, 0.3)':'rgba(87, 105, 69, 0.77)',
			cursor: 'pointer'
		};

		if (this.state.isEditing){
			return (
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input className="form-control" type="text" defaultValue={task} ref="editInput" />
					</form>
				</td>
			);
		}

		return (
			<td style={taskStyle}
				onClick={this.props.toggleTask.bind(this, task)}
			>
			{task}
			</td>
		);
	}

	renderEditSection(){
		if (this.state.isEditing){
			return (
				<td className="action">
					<button className="btn btn-success" onClick={this.onSaveClick.bind(this)}>Save</button>
					<button className="btn btn-default" onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>
			);
		}

		return (
				<td className="action">
					<button className="btn btn-primary" onClick={this.onEditClick.bind(this)}>Edit</button>
				</td>
		);
	}

	renderIconSection(){
		const { task, isCompleted } = this.props;
		if (isCompleted){
			return(
				<td className="icon">
					<i className="fa fa-check"></i>
				</td>
			);
		}

		return (
			<td className="icon">
				<i className="fa fa-times"></i>
			</td>
		);
	}

	renderDeleteSection(){
		return (
				<td className="delete">
					<i className="fa fa-trash" onClick={this.props.deleteTask.bind(this, this.props.task)}></i>
				</td>
		);
	}

	render() {
		return (
				<tr>
					{this.renderIconSection()}
					{this.rederTaskSection()}
					{this.renderEditSection()}
					{this.renderDeleteSection()}
				</tr>
		);
	}

	onEditClick(){
		this.setState({ isEditing:true });
	}

	onCancelClick(){
		this.setState({ isEditing:false});
	}

	onSaveClick(event) {
		event.preventDefault();
		const oldTask= this.props.task;
		const newTask = this.refs.editInput.value;
		this.props.saveTask(oldTask, newTask);
		this.setState({isEditing:false});
	}
}