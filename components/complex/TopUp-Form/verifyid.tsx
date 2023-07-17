import React, {ChangeEventHandler} from 'react'



interface onChanging {
  setVerifyId: (e?: any) => void;
}

const verifyId = (props: onChanging) => {
  const { setVerifyId } = props;


  return (
    <div className="pt-md-50 pt-30">
      <div className="">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">
          Verify ID
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          name="ID"
          // required
          aria-describedby="verifyID"
          placeholder="Enter your ID"
          onChange={(e)=>setVerifyId(e)}
        />
      </div>
    </div>
  );
};


export default verifyId
