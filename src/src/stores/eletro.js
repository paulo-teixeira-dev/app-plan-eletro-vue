import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

import {apiGet, apiPut} from '@/services/API.js'


export const useEletroStore = defineStore('eletro', () => {

    const eletros = reactive({data: []})
    const eletro = reactive({
        id: null,
        nome: null,
        descricao: null,
        tensao: null,
        marca_id: null
    })

    function setEletro(obj = {}) {
        eletro.id = obj.id ?? null
        eletro.nome = obj.nome ?? null
        eletro.descricao = obj.descricao ?? null
        eletro.tensao = obj.tensao ?? null
        eletro.marca_id = obj.marca_id ?? null
    }

    async function getEletro() {
        const response = await apiGet('/eletro/listing')
        eletros.data = await response.data
    }

    async function getEletroById(id = null) {
        const response = await apiGet('/eletro/show/' + id)
        await setEletro(response.data)
    }

    async function updateEletro() {
        const response = await apiPut('/eletro/update/' + eletro.id, eletro)
        await console.log(response);
    }

    return {getEletro, getEletroById, updateEletro, eletros, eletro}
})
