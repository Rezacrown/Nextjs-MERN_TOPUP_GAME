import React from "react";

import VerifyId from "./verifyid";
import Nominal from "./nominal";
import Payment from "./payment";

import { DetailPageInterface, NominalInterface } from "@/interface/Player";


export default function TopUpForm(props: DetailPageInterface) {

  const {voucher, payment} = props
  
  console.log("payment >>");
  console.log(props);

  return (
    <form action="./checkout.html" method="POST">
      <VerifyId />

      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-start">
          {voucher?.nominal?.length
            ? voucher?.nominal.map(
                (
                  { coinName, coinQuantity, price, _id }: NominalInterface,
                  index
                ) => (
                  <Nominal
                    coinName={coinName}
                    coinQuantity={coinQuantity}
                    price={price}
                    _id={_id}
                  />
                )
              )
            : "Loading..."}
        </div>
      </div>

      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {/* <label
              className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
              htmlFor="transfer"
            >
              <input
                className="d-none"
                type="radio"
                id="transfer"
                name="paymentMethod"
                value="transfer"
              />
              <div className="detail-card">
                <div className="d-flex justify-content-between">
                  <p className="text-3xl color-palette-1 fw-medium m-0">
                    Transfer
                  </p>
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
                  Worldwide Available
                </p>
              </div>
            </label> */}

            {payment?.length
              ? payment.map((pay) => (<Payment {...pay} />))
              : "loading payment..."
            }

            <div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
          </div>
        </fieldset>
      </div>

      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>

      
      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="./checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </a>
      </div>
    </form>
  );
}
