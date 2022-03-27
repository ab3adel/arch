import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {ikoniksFetch} from './services/query'
export const store = configureStore({
reducer:{
    [ikoniksFetch.reducerPath]:ikoniksFetch.reducer
}
})

setupListeners(store.dispatch)