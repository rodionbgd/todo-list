import { createRouter, createWebHistory } from 'vue-router';
import Todolist from '../pages/TodoList.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Todolist
        },
        {
            path: '/:id',
            name: 'EditTodo',
            component: () => import('@/pages/EditTodo.vue'),
            props: true
        }
    ]
});

export default router;
