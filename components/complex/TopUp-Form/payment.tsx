import React from "react";

import { PaymentInterface } from "@/interface/Player";

interface PaymentSelect extends PaymentInterface {
  index: number;
  handlePay: (payment?: any, bank?: any) => void;
}

export default function payment(props: PaymentSelect) {
  // console.log('props payment >>')
  // console.log(props)

  const { status, _id, bank, type, index, handlePay } = props;

  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={bank[index]?._id}
    >
      <input
        className="d-none"
        type="radio"
        id={bank[index]?._id}
        name="paymentMethod"
        value={bank[index]?._id}
        // required
        onChange={() => handlePay(_id, bank[index]?._id)}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{type}</p>
          <svg
            id="icon-check"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
            <path
              d="M5.83301 10L8.46459 12.5L14.1663 7.5"
              stroke="#00BAFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p className="text-lg color-palette-1 m-0">
          {bank?.length && bank[index]?.nameBank}
        </p>
        <br />
        <b className="text-lg color-palette-1 m-0">
          {bank?.length && bank[index]?.name}
        </b>
        <br />
        <b className="text-lg color-palette-1 m-0">
          {bank?.length && bank[index]?.noRekening}
        </b>
      </div>
    </label>
  );
}
