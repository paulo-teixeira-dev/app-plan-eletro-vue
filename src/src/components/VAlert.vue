<script setup>
    /**store**/
    import {useAlertStore} from '@/stores/alert.js'

    const alertStore = useAlertStore()
</script>

<template>
    <div class="app-alert px-3 py-3">
        <div v-for="alert in alertStore.data.message" class="alert" role="alert"
             :class="[alertStore.data.status === 'error' ? 'alert-danger': 'alert-success']">{{ alert }}
        </div>
    </div>
</template>

<style scoped lang="scss">
    .app-alert {
        position: fixed;
        top: 50px;
        right: 30px;
        z-index: 99;
    }
</style>
