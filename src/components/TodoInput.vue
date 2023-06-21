<template>
    <header>
        <div class="align-center">
            <input
                id="toggle-all"
                class="toggle-all toggle"
                type="checkbox"
                :checked="todoStore.isAllToggled"
                @input="toggleAll"
            />
        </div>
        <input
            v-model="title"
            class="new-todo"
            autofocus
            autocomplete="off"
            :placeholder="text.addTodo"
            @keyup.enter="addTodo"
        />
    </header>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();
const title = ref('');
const text = reactive({
    addTodo: 'Введите задачу...',
    changeStatus: 'Изменить статус всех'
});

const addTodo = () => {
    if (!title.value) {
        return;
    }
    todoStore.addTodo(title.value);
    title.value = '';
};

const toggleAll = () => {
    todoStore.toggleAll();
};
</script>
