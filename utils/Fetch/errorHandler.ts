import { ToastContainer, toast } from 'react-toastify'


export default function Errorhandler(error: any) {
  // console.log('error >>>>>>>>>>>>')
  // console.log(error)
  if (error) {
    let message;
    if (error.response) {
        message = error.response.data.message || 'Internal Server Error';

      switch(message) {
        case 'not authorized this route': {
          window.location.href = '/signin'
        };
        // case 'InvalidCharacterError: The string to be decoded is not correctly encoded.': {
        //   window.location.href = "/signin";
        //   }
        default: {
          message
        }
      }

           
      toast.error(message);
      return Promise.reject(message);
    }
  }
}