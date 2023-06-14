import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

import {apiGet, apiPut, apiDelete} from '@/services/API.js'


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

    async function updateEletro(id) {
        const response = await apiPut('/eletro/update/' + id, eletro)
    }

    async function deleteEletroById(id) {
        const response = await apiDelete('/eletro/delete/' + id)
        if(response.status == "success"){
            await setEletro();
            return true;
        }

        return false
    }

    return {getEletro, getEletroById, updateEletro, deleteEletroById, eletros, eletro}
})
