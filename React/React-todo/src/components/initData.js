module.exports = {
	init(){
		var todo = localStorage.getItem('todos');

		if(todo){
			return JSON.parse(localStorage.getItem('todos'));
		}
		else{
			var data = this.getInitialData();
			return data;
		}
		
	},

	getInitialData(){
		var initialTodos = [
			{
				task:'Keep Learning',
				isComplete: false
			},
			{
				task:'Become better',
				isCompleted: false
			}
		];

		return initialTodos;
	}
}


