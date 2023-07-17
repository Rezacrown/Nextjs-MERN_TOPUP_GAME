import {getData} from '@/utils/Fetch'
const V1 = '/api/v1'


// declare services

export const getLandingpageAPI = async (): Promise<void> => {
  try {
    const res = await getData(`${V1}/player/landingpage`);
      return res.data
      
  } catch (error) {
    console.log(error);
  }
};


export const getDetailpageAPI = async (id: string): Promise<void> => {
  try {
    const res = await getData(`${V1}/player/${id}/detail`);
    // console.log('res >>>')
    // console.log(res)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};