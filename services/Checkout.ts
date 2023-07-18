import { postData } from '@/utils/Fetch'
import Cookie from "js-cookie";

const V1 = "/api/v1";


// export const handleTocheckout = async () => {

// }


export const handleCheckout = async (data: any) => {

    const hashedtoken = Cookie.get('authToken')

    const trueToken = atob(hashedtoken!)
    const res = await postData(`${V1}/player/checkout`, data, trueToken);

    return res
}