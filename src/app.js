import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			todos: [
				"Buy shopping", "Clean bathroom", "Car's MOT"
			],
			newToDoTask: ""
    },
		methods: {
			saveToDoTask: function () {
				this.todos.push(this.newToDoTask);
				this.newToDoTask = "";
			}
		}
	});
});
