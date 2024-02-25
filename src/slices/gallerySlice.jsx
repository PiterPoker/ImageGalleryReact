import { createSlice } from '@reduxjs/toolkit';


const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        images: [],
    },
    reducers: {
        setImagesUrl: (state, data) => {
            state.images = [...data.payload]
        },
    },
})

export const { setImagesUrl } = gallerySlice.actions

export const selectAllImages = (state) => state.gallery.images;

export default gallerySlice.reducer;