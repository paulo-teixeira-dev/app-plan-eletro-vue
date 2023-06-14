<script setup>
    import {onMounted} from 'vue'

    /**component**/
    import EletroTable from '@/components/EletroTable.vue'

    /**stores**/
    import {useEletroStore} from '@/stores/eletro'

    const eletroStore = useEletroStore()

    onMounted(() => {
        eletroStore.getEletro()
    })
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <eletro-table :content="eletroStore.eletros.data" @action="goShow" ></eletro-table>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>
