import instance from "@/utils/Fetch/axios";


export const getData = async (
  url: string,
  params?: string | object,
  token?: any
): Promise<any> => {
  return await instance.get(url, {
    params: params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postData = async (
  url: string,
  payload?: object,
  token?: string | null,
): Promise<any> => {
  // console.log('token <<')
  // console.log(token)
  return await instance.post(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token!!}`,
    },
  });
};

export const putData = async (
  url: string,
  payload?: object,
  token?: string,
): Promise<any> => {
  return await instance.put(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteData = async (
  url: string,
  token?: string,
  // payload?: object,
): Promise<any> => {
  return await instance.delete(`${url}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};