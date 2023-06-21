<template>
    <li class="todo">
        <div class="flex align-center">
            <input
                class="toggle"
                type="checkbox"
                :checked="props.todo.completed"
                @input="toggleTodo"
            />
            <router-link
                :class="{ title: true, strike: props.todo.completed }"
                :to="{ name: 'EditTodo', params: { id: props.todo.id } }"
            >
                {{ props.todo.title }}
            </router-link>
            <button class="destroy" @click="removeTodo"></button>
        </div>
    </li>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();
const props = defineProps({
    todo: {
        type: Object,
        required: true
    }
});

const toggleTodo = () => {
    todoStore.toggleTodo(props.todo);
};

const removeTodo = () => {
    todoStore.removeTodo(props.todo);
};
</script>
