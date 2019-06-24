import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			todos: [
				{ name: "Buy shopping", priority: "high"},
				{ name: "Clean bathroom", priority: "low"},
				{ name: "Car's MOT", priority: "high"}
			]
    },
		methods: {
			saveToDoTask: function () {
				this.todos.push( {
					name: this.todos.name,
					priority: this.todos.priority
			});
			this.todos.name = "";
			}
		}
	});
});
