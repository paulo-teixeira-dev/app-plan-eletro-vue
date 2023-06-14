import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'

import {apiGet} from '@/services/API.js'

export const useMarcaStore = defineStore('marca', () => {

    const marcas = reactive({data: []})

    async function getMarcas() {
        const response = await apiGet('/marca/listing')
        marcas.data = await response.data
    }

    return {getMarcas, marcas}
})
