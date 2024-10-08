import {configureStore} from '@reduxjs/toolkit'

import sliceReducer from '../slice/slice'

export const store = configureStore({
    reducer: {
        username: sliceReducer
    }
})