import React from "react";

import VerifyId from "./verifyid";
import Nominal from "./nominal";
import Payment from "./payment";

import { DetailPageInterface, NominalInterface } from "@/interface/Player";


export default function TopUpForm(props: DetailPageInterface) {
  const { voucher, payment } = props;

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
            {payment?.length
              ? payment.map((pay) => pay.bank?.length ? pay.bank.map((bank, index)=> (<Payment index={index}  {...pay} />)) : "Nothing Bank Here..." )
              : "loading payment..."}
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
