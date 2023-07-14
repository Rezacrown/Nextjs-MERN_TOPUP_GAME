import {getData, postData} from '@/utils/Fetch'
import {SuccesNotif} from '@/utils/notif'
const V1 = '/api/v1'



export const getCategory = async () => {
    const res = await getData(`${V1}/player/category`)
    // console.log('res service')
    // console.log(res)

    return res?.data
}


export const checkLocalStorage = (localstorage: string) => {
    const storage = localStorage.getItem(localstorage)
    let parsing = null

    if(storage !== null) {
        parsing = JSON.parse(storage)
        return parsing
    } else {
        return null
    }
}


// PR nanti buat refresh token
// export const isLogin = () => {
//     const token = localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken') ?? '') : null

//     if(token) {

//     }
// }


export const handleSignup = async (data: any) => {
    const res = await postData(`${V1}/auth/signup`, data)
    return res.message
}

export const handleSignin = async (data: any) => {
    const res = await postData(`${V1}/auth/signin`, data).then((res: any)=> {
        localStorage.setItem('authToken', res?.token) 
    })
    return res
}