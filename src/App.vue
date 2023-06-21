<template>
    <AppLogo />
    <router-view />
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';
export default {
    name: 'App',
    components: {
        AppLogo
    }
};
</script>
