import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

const errorResponse = {
    status: 'error',
    message: ["Falha de Transmissão."],
    data: null,
}
let responseAPI = {
    status: null,
    message: null,
    data: null,
}

async function apiGet(url) {
    await api.get(url)
        .then(function (response) {
            responseAPI = Object.assign({}, responseAPI, response.data);
        })
        .catch(function (error) {
            responseAPI = Object.assign({}, responseAPI, errorResponse);
        });

    return responseAPI;
}

async function apiPost(url, param) {
    let responseAPI = {}
    await api.post(url, param)
        .then(function (response) {
            responseAPI = Object.assign({}, responseAPI, response.data);
        })
        .catch(function (error) {
            responseAPI = Object.assign({}, responseAPI, errorResponse);
        });

    return responseAPI;
}

async function apiPut(url, param) {
    let responseAPI = {}
    await api.put(url, param)
        .then(function (response) {
            responseAPI = Object.assign({}, responseAPI, response.data);
        })
        .catch(function (error) {
            responseAPI = Object.assign({}, responseAPI, errorResponse);
        });

    return responseAPI;
}

async function apiDelete(url) {
    let responseAPI = {}
    await api.delete(url)
        .then(function (response) {
            responseAPI = Object.assign({}, responseAPI, response.data);
        })
        .catch(function (error) {
            responseAPI = Object.assign({}, responseAPI, errorResponse);
        });

    return responseAPI;
}

export {apiGet, apiPost, apiPut, apiDelete}