import { getData, postData } from "@/utils/Fetch";
import { SuccesNotif } from "@/utils/notif";
import decoded from "jwt-decode";
import Cookie from "js-cookie";

import { UserPayload } from "@/interface/navbar";
// import jwtDecode from "jwt-decode";

const V1 = "/api/v1";

export const getCategory = async () => {
  const res = await getData(`${V1}/player/category`);
  // console.log('res service')
  // console.log(res)

  return res?.data;
};

export const checkLocalStorage = (localstorage: string) => {
  const storage = localStorage.getItem(localstorage!);
  let parsing = null;

  if (storage !== null) {
    parsing = JSON.parse(storage);
    return parsing;
  } else {
    return null;
  }
};

export const handleSignup = async (data: FormData) => {
  const res = await postData(`${V1}/auth/signup`, data);
  return res.message;
};

export const isLogin = () => {
    const storage = Cookie.get('authToken');
    if(storage) {
      return 'isLogin'
    } else {
      return null
    }
}

export const checkCookies = (cookie: string) => {
  const storage = Cookie.get(cookie);
  if (storage) {
    const getHashedToken = atob(storage!);
    const payload: UserPayload = decoded(getHashedToken);
    // console.log('payload >>>')
    // console.log(payload)
    return payload;
  } else {
    return null;
  }
};

export const handleSignin = async (data: any) => {
  const res = await postData(`${V1}/auth/signin`, data).then((res: any) => {
    // hash token dan simpan di cookies agar aman
    const hashToken = btoa(res?.token);
    Cookie.set("authToken", hashToken, {
      expires: 1 / 6,
      secure: true,
    });
  });
  return res;
};

export const removeToken = (token: string) => {
  Cookie.remove(token);
  return "success";
};


// untuk handle check di SSR
export const checkServerCookie = (token: string, type: 'base64') => {
  const res = Buffer.from(token, type).toString('ascii')

  const decode: UserPayload = decoded(res);

  return decode
}


export const isValidToken = (token: string) => {
  
}
