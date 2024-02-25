import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import galleryReducer from './slices/gallerySlice'
import termsOfUseReducer from './slices/termsOfUseSlice'
import imagesAPI from './slices/galleryAPISlice' 

export const store = configureStore({
    reducer: {
        gallery: galleryReducer,
        termsOfUse: termsOfUseReducer,
        [imagesAPI.reducerPath]: imagesAPI.reducer, 
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imagesAPI.middleware),
});

setupListeners(store.dispatch) 