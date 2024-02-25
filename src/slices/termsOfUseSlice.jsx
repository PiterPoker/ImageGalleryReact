import { createSlice } from '@reduxjs/toolkit';

export const termsOfUseSlice = createSlice({
    name: 'termsOfUse',
    initialState:{
        isAccept: false,
        path: '',
        paragraphs: [],
      },
    reducers: {
      accept: (state, value) => {
        state.isAccept = value.payload
      },
      pathRedirect: (state, path) => {
        state.path = path.payload
      },
      paragraphs: (state, data) => {
        const dataSort = [...data.payload]
        dataSort.sort((a, b) => a.index - b.index)
        state.paragraphs = dataSort
      },
    },
  })
  
  
  export const { accept, pathRedirect, paragraphs } = termsOfUseSlice.actions

  export const getParagraphs = (state) => state.termsOfUse.paragraphs;
  export const getPath = (state) => state.termsOfUse.path;
  export const getIsAccept = (state) => state.termsOfUse.isAccept;
  
  export default termsOfUseSlice.reducer