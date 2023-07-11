import React from 'react'

const verifyId = () => {
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
          aria-describedby="verifyID"
          placeholder="Enter your ID"
        />
      </div>
    </div>
  );
}


export default verifyId
