import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './slices/gallerySlice'
import termsOfUseReducer from './slices/termsOfUseSlice'

export const store = configureStore({
    reducer: {
        gallery: galleryReducer,
        termsOfUse: termsOfUseReducer,
    },
});