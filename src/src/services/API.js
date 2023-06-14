import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

const errorResponse = {
    status: 'error',
    message: ["Falha de Transmissão."],
    data: null,
}

async function apiGet(url) {
    let responseAPI = ''
    await api.get(url)
        .then(function (response) {
            responseAPI = {
                status: response.data.status,
                message: response.data.message,
                data: response.data.data ?? null
            }
        })
        .catch(function (error) {
            responseAPI = errorResponse
        });

    return responseAPI;
}

export {apiGet}