angular.module('app',[])

.controller('TodoController',function($scope){
	$scope.appTitle = "Katie's Awesome ToDo App";
	$scope.appHeadline = "This one will save to local storage!";
	$scope.saved = localStorage.getItem('todos');
	console.log($scope.saved);
	//Parse解析出JSON数据
	//todo里放的是localstorage里放的objects
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) :
		[ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
	console.log($scope.todos);
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.addTodo = function() {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; //clear the input after adding
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			count+= todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.archive = function() {
		console.log($scope.todos);
		var oldTodos = $scope.todos;
		$scope.todos = [];
		console.log($scope.todos);
		angular.forEach(oldTodos, function(todo){
			if (!todo.done)
				$scope.todos.push(todo);
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
});
