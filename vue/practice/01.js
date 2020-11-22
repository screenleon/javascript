const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello me!',
    }
});

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: Date.now(),
    }
});

const app3 = new Vue({
    el: '#app-3',
    data: {
        visiable: false,
    }
});

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' },
        ],
    }
});

const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!',
    },
    methods: {
        reverseMessage: function() {
            this.message = String(this.message).split('').reverse().join('');
        }
    }
});

const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Initial text',
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
});

const app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'},
        ]
    }
});