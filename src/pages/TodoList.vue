<template>
    <h1>{{ data.text.title }}</h1>
    <main>
        <section class="todoapp">
            <TodoInput />
            <section class="main">
                <ul class="todo-list">
                    <TodoItem
                        v-for="t in todo.todoList"
                        :key="t.id"
                        :todo="t"
                    />
                </ul>
            </section>
        </section>
    </main>
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue';
import TodoInput from '@/components/TodoInput.vue';
import { reactive } from 'vue';
import { useTodoStore } from '@/stores/todo';

const todo = useTodoStore();
const data = reactive({
    text: {
        changeStatus: 'Изменить статус всех',
        title: 'Список задач'
    }
});
</script>
