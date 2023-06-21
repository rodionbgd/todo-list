<template>
    <h1>{{ text.title }}</h1>
    <input v-model="title" class="new-todo" />
    <div class="flex justify-end">
        <button class="mt-3 btn-primary" @click="updateTodo">
            {{ text.save }}
        </button>
    </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from 'vue';
import { useTodoStore } from '@/stores/todo';
import { useRouter } from 'vue-router';

const todoStore = useTodoStore();
const router = useRouter();

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const text = reactive({
    title: 'Редактирование задачи',
    save: 'Сохранить'
});

const todo = ref();
const title = ref();

onBeforeMount(() => {
    todo.value = todoStore.getTodoById(Number(props.id));
    title.value = todo?.value.title;
});

const updateTodo = () => {
    todoStore.updateTodo(todo?.value.id, title.value);
    router.push('/');
};
</script>
