import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import galleryApi from '../api/galleryApi';

export const getAllImages = createAsyncThunk(
    'gallery/getAllImages',
    async () => {
        const data = await galleryApi.getGalleries()
        return data
    },
)

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        images: {},
        status: 'idle',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllImages.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(getAllImages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.images = action.payload;
            })

            .addCase(getAllImages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
})

export const selectAllImages = (state) => state.gallery.images;
export const getAllImagesStatus = (state) => state.gallery.status;
export const getAllImagesError = (state) => state.gallery.error;

export default gallerySlice.reducer;