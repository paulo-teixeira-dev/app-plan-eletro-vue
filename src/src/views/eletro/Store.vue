<script setup>
    import {onBeforeUnmount, onMounted} from 'vue'

    import {useRouter, useRoute} from 'vue-router'

    /**component**/
    import VInput from '@/components/VInput.vue'
    import VTextArea from '@/components/VTextArea.vue'
    import VSelect from '@/components/VSelect.vue'

    /**stores**/
    import {useEletroStore} from '@/stores/eletro'
    import {useMarcaStore} from '@/stores/marca'

    const eletroStore = useEletroStore()
    const marcaStore = useMarcaStore()

    /**property**/
    const router = useRouter()
    const route = useRoute()

    onMounted(() => {
        eletroStore.setEletro()
        marcaStore.getMarcas()
    })

    onBeforeUnmount(()=>{
        eletroStore.getEletros()
    })

    function goBack() {
        router.push({name: 'eletroIndex'})
    }

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <v-input btn-class="mb-3" v-model.trim="eletroStore.eletro.nome" :max="200" label="Nome" placeholder="digite o nome"/>
                <v-select btn-class="mb-3" v-model.trim="eletroStore.eletro.tensao" :content="eletroStore.tensao" label="Tensão"/>
                <v-select btn-class="mb-3" v-model.trim="eletroStore.eletro.marca_id" :content="marcaStore.marcas.data" label="Marca" placeholder="digite o nome"/>
                <v-text-area btn-class="mb-3" v-model.trim="eletroStore.eletro.descricao" label="Descrição" placeholder="digite o descrição"/>
            </div>
            <div class="col-12 pt-3 d-flex justify-content-between">
                <div class="d-flex">
                    <button type="button" class="btn btn-success mx-2" @click="eletroStore.storeEletro()">Concluir</button>
                </div>
                <button type="button" class="btn btn-primary" @click="goBack">Voltar</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>
