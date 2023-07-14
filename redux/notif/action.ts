import {CLEAR_NOTIF, SET_NOTIF, notifInterface} from './constants'

import type { Dispatch } from "@reduxjs/toolkit";


const dispatch = dispatchEvent



const setnotif = ({message, status, typeNotif}: notifInterface) => {
    return {
        type: SET_NOTIF || '',
        status: status,
        typeNotif: typeNotif,
        message: message,
    }
}


const clearnotif = () => {
    return {
        type: CLEAR_NOTIF,
    }
}






