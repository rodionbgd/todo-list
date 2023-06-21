import { computed, reactive, ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', () => {
    const todoList = reactive([
        {
            id: 1,
            title: 'shopping',
            completed: false
        },
        {
            id: 2,
            title: 'relaxing',
            completed: false
        },
        {
            id: 3,
            title: 'training',
            completed: false
        }
    ]);
    const lastId = ref(todoList[todoList.length - 1].id);

    const toggledAll = ref(false);

    const getTodoById = id => {
        return todoList.find(todo => todo.id === id);
    };
    const toggleTodo = todo => {
        const todoToUpdate = getTodoById(todo.id);
        todoToUpdate.completed = !todoToUpdate.completed;
    };

    const updateTodo = (id, title) => {
        const todoToUpdate = getTodoById(id);
        todoToUpdate.title = title;
    };
    const isAllToggled = computed(() => {
        return todoList.every(({ completed }) => completed);
    });

    const toggleAll = () => {
        toggledAll.value = !toggledAll.value;
        todoList.forEach(todo => (todo.completed = toggledAll.value));
    };

    const addTodo = title => {
        lastId.value++;
        const todoObj = {
            id: lastId.value,
            title,
            completed: false
        };
        todoList.push(todoObj);
    };
    const removeTodo = todo => {
        const idxToRemove = todoList.findIndex(({ id }) => id === todo.id);
        todoList.splice(idxToRemove, 1);
    };

    watch(isAllToggled, () => {
        toggledAll.value = isAllToggled.value;
    });

    return {
        todoList,
        getTodoById,
        toggleTodo,
        isAllToggled,
        toggleAll,
        toggledAll,
        addTodo,
        removeTodo,
        updateTodo
    };
});
