import { configureStore } from '@reduxjs/toolkit'


import notifReducer from './notif/reducer'


const store = configureStore({
    reducer: {
        notif: notifReducer
    }
})



export default store