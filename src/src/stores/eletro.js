import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

import {apiGet} from '@/services/API.js'


export const useEletroStore = defineStore('eletro', () => {

    const eletros = reactive({data: []})
    const eletro = reactive({
        id: null,
        nome: null,
        descricao: null,
        tensao: null,
        marca: {
            id: null
        }
    })

    function setEletro(obj = {}) {
        eletro.id = obj.id ?? null
        eletro.nome = obj.nome ?? null
        eletro.descricao = obj.descricao ?? null
        eletro.tensao = obj.tensao ?? null
        eletro.marca.id = obj.marca?.id ?? null
    }

    async function getEletro() {
        const response = await apiGet('/eletro/listing')
        eletros.data = await response.data
    }

    async function getEletroById(id = null) {
        const response = await apiGet('/eletro/show/' + id)
        await setEletro(response.data)
    }

    return {getEletro, getEletroById, eletros, eletro}
})
