export const apiServer = "http://188.166.203.164";

const baseFetch = async (url, config = {}, params) => {
    try {
        const _config = {
            ...config
        }
        if (params) {
            _config['body'] = JSON.stringify(params)
        }
        return await fetch(`${apiServer}${url}`, {
            ..._config
        })
    } catch (error) {
        console.log(error)
    }
}

const fetchGet = async (url, config) => {
    return await baseFetch(url, {
        ...config,
        method: 'GET'
    })
}

const fetchOptions = async (url, config) => {
    return baseFetch(url, {
        ...config,
        method: 'OPTIONS'
    })
}

const fetchPost = async (url, params = {}, config = {}) => {
    return baseFetch(url, {
        ...config,
        method: 'POST'
    }, params)
}

const fetchPut = async (url, params = {}, config = {}) => {
    return await baseFetch(url, {
        ...config,
        method: 'PUT'
    }, params)
}
const fetchPatch = async (url, params = {}, config = {}) => {
    return await baseFetch(url, {
        ...config,
        method: 'PATCH'
    }, params)
}

const fetchDelete = async (url, params = {}, config = {}) => {
    return await baseFetch(url, {
        ...config,
        method: 'DELETE'
    }, params)
}

export default {
    baseUrl: apiServer,
    get: fetchGet,
    options: fetchOptions,
    post: fetchPost,
    put: fetchPut,
    patch: fetchPatch,
    delete: fetchDelete,
}