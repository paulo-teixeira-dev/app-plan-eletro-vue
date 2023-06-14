<script setup>
    import {onMounted} from 'vue'
    import { useRouter } from 'vue-router'


    /**component**/
    import EletroTable from '@/components/EletroTable.vue'

    /**stores**/
    import {useEletroStore} from '@/stores/eletro'
    const eletroStore = useEletroStore()

    const router = useRouter()

    onMounted(() => {
        eletroStore.getEletro()
    })

    function goShow(id) {
        router.push({ name: 'eletroShow', params: { id: id } })
    }

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
