import baseAPI from './baseApi'

export const getImageByUrl = async (urlPath) => {

    const response = await baseAPI.get(urlPath)
    return await response.blob()
}

export const getHost = () => {
    return baseAPI.baseUrl
}

export default {
    getHost,
    getImageByUrl,
}