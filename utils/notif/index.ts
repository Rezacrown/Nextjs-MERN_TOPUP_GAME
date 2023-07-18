import {toast} from 'react-toastify'

export const SuccesNotif = (message: string) => {
    toast.success(message)
}

export const ErrorNotif = (message: string) => {
    toast.error(message)
}

export const WarningNotif = (message: string) => {
    toast.warning(message)
}