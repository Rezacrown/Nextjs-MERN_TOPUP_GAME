import React from "react";
import { config } from "@/config";
import Image from "next/image";
import { TransactionProps } from "@/interface/transactions";

const Header_detail = (props: any) => {
  // console.log('header')
  // console.log(props)

  return (
    <>
      <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
        <div className="game-checkout d-flex flex-row align-items-center">
          <div className="pe-4">
            <div className="cropped">
              <Image
                src={`${config.URL}/${props?.historyVoucherTopup?.thumbnail}`}
                width="200"
                height="130"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="fw-bold text-xl color-palette-1 mb-10">
              {props?.historyVoucherTopup?.gameName}
            </p>
            <p className="color-palette-2 m-0">
              Category: {props?.historyVoucherTopup?.category}
            </p>
          </div>
        </div>
        <div>
          <p
            className={`fw-medium text-center label ${props?.status} m-0 rounded-pill`}
          >
            {props?.status}
          </p>
        </div>
      </div>
    </>
  );
};

export default Header_detail;
