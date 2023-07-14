import {ToastContainer, toast } from 'react-toastify'

export default function Errorhandler(error: any) {
  // console.log('error >>>>>>>>>>>>')
  // console.log(error)
  if (error) {
    let message;
    if (error.response) {
        message = error.response.data.message || "internal server error";
           
      toast.error(message);
      return Promise.reject(message);
    }
  }
}