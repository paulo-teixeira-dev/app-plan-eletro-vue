import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

import {apiGet} from '@/services/API.js'


export const useEletroStore = defineStore('eletro', () => {

    const eletros = reactive({data: []})

    async function getEletro() {
        const response = await apiGet('/eletro/listing')
        eletros.data = await response.data
    }

    return {getEletro, eletros}
})
