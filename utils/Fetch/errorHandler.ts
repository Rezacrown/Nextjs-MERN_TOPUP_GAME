export default function Errorhandler(error: any) {
  // console.log('error >>>>>>>>>>>>')
  // console.log(error)
  if (error) {
    let message;
    if (error.response) {
        message = error.response.data.msg || "internal server error";
           
      return Promise.reject(message);
    }
  }
}