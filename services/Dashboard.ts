import { postData, getData, putData } from "@/utils/Fetch";
import { SuccesNotif } from "@/utils/notif";
import Cookies from "js-cookie";
// import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// import { checkServerCookie } from "@/services/Auth";

const V1 = "/api/v1";

export const getDashboardData = async () => {
  const hashedtoken = Cookies.get("authToken");
  const trueToken = atob(hashedtoken!);

  const res = await getData(`${V1}/player/dashboard`, "", trueToken);

  // console.log('dashboard data >>')
  // console.log(res)

  return res;
};

export const getHistoryTransactions = async (params: string) => {
  const hashedtoken = Cookies.get("authToken");
  const trueToken = atob(hashedtoken!);

  const res = await getData(
    `${V1}/player/history/transaction${params ? "?status=" + params : ""}`,
    "",
    trueToken
  );

  // console.log('history data >>')
  // console.log(res.data)

  return res;
};

export const getDetailHistoryTransactions = async (params: string, trueToken: string) => {
    const res = await getData(`${V1}/player/history/transaction/${params}`, '', trueToken);

    // console.log('res >>')
    // console.log(res.data)

    return res.data;
};


export const getDataProfile = async () => {
  const hashedtoken = Cookies.get("authToken");
  const trueToken = atob(hashedtoken!);


  const res = await getData(`${V1}/player/profile`, '', trueToken)

  // console.log('data profile')
  // console.log(res.data)

  return res.data;
}


export const updateProfile = async (payload: FormData) => {
   const hashedtoken = Cookies.get("authToken");
   const trueToken = atob(hashedtoken!);

  const res = await putData(`${V1}/player/profile`, payload, trueToken).then((response: any) => {
    Cookies.remove('authToken')
    SuccesNotif(response?.message)
  })

  
  
  return res
}