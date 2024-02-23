import { createSlice } from '@reduxjs/toolkit';

export const termsOfUseSlice = createSlice({
    name: 'termsOfUse',
    initialState:{
        isAccept: false,
        path: '',
        paragraphs: [],
      },
    reducers: {
      isAccept: (state, value) => {
        state.isAccept = value.payload
      },
      pathRedirect: (state, path) => {
        state.path = path
      },
      paragraphs: (state, data) => {
        console.log(data)
        const dataSort = [...data.payload]
        console.log(dataSort)
        dataSort.sort((a, b) => a.index - b.index)
        state.paragraphs = [...dataSort]
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { isAccept, pathRedirect, paragraphs } = termsOfUseSlice.actions

  export const getParagraphs = (state) => state.termsOfUse.paragraphs;
  export const getPath = (state) => state.termsOfUse.path;
  export const getIsAccept = (state) => state.termsOfUse.isAccept;
  
  export default termsOfUseSlice.reducer