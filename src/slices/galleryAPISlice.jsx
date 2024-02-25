import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const imagesAPI = createApi({
    reducerPath: 'imagesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://188.166.203.164' }),
    endpoints: (builder) => ({
      getImages: builder.query({
        query: () => `/static/test.json`,
      }),
    }),
  })

  export const ImagesAPIData = (state) => state.imagesAPI.data;
  export const ImagesAPIStatus = (state) => state.imagesAPI.state;
  export const ImagesAPIError = (state) => state.imagesAPI.error;
  
  export const { useGetImagesQuery } = imagesAPI

  export default imagesAPI