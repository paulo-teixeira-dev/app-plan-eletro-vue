<script setup>
    import TheHeader from '@/components/TheHeader.vue'
    import {RouterView, useRouter} from 'vue-router'
</script>

<template>
    <main>
        <the-header/>
        <div class="container">
            <div class="row">
                <div class="col-12 py-5">
                    <div class="body-content p-2">
                        <RouterView/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    .body-content{
        background: #FFFFFF;
        border: #DADCE0 solid 1px;
        box-shadow: 0px 0px 7px 2px rgba(14, 14, 14, .07);
    }
</style>
