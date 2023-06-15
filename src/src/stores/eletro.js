import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

import {apiGet, apiPut, apiDelete, apiPost} from '@/services/API.js'
import {useAlertStore} from '@/stores/alert.js'

export const useEletroStore = defineStore('eletro', () => {

    const alertStore = useAlertStore();

    const eletros = reactive({data: []})
    const eletro = reactive({
        id: null,
        nome: null,
        descricao: null,
        tensao: null,
        marca_id: null
    })

    const tensao = [
        {id: 110, nome: 110},
        {id: 220, nome: 220},
    ]

    function setEletro(obj = {}) {
        eletro.id = obj.id ?? null
        eletro.nome = obj.nome ?? null
        eletro.descricao = obj.descricao ?? null
        eletro.tensao = obj.tensao ?? null
        eletro.marca_id = obj.marca_id ?? null
    }

    async function storeEletro() {
        const response = await apiPost('/eletro/store', eletro)
        if (response.status == "success") {
            await setEletro();
        }
        await alertStore.setAlert(response)
    }

    async function getEletros() {
        const response = await apiGet('/eletro/listing')
        if (response.status == "error") {
            await alertStore.setAlert(response)
        } else {
            await alertStore.setAlert()
            eletros.data = await response.data
        }
    }

    async function getEletroById(id = null) {
        const response = await apiGet('/eletro/show/' + id)
        await setEletro(response.data)
    }

    async function updateEletro(id) {
        const response = await apiPut('/eletro/update/' + id, eletro)
        await alertStore.setAlert(response)
    }

    async function deleteEletroById(id) {
        const response = await apiDelete('/eletro/delete/' + id)
        if (response.status == "success") {
            await getEletros();
            await setEletro();
            await setEletro();
            return true;
        }
        return false
    }

    return {getEletros, getEletroById, updateEletro, deleteEletroById, setEletro, storeEletro, eletros, eletro, tensao}
})
