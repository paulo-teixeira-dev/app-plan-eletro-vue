import {defineStore} from 'pinia'
import {reactive, computed} from 'vue'

export const useAlertStore = defineStore('alert', () => {

    const data = reactive({
            status: null,
            message: null,
        }
    )

    function setAlert(param = {}) {
        data.status = param.status ?? null
        data.message = param.message ?? null
    }

    return {data, setAlert}
})