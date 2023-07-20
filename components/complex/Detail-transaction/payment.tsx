import React from "react";
import { TransactionProps } from "@/interface/transactions";

const Payment_detail = (props: TransactionProps) => {

  const {name, historyPayment } = props

  return (
    <>
      <div className="payment pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name <span className="purchase-details">{name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type <span className="payment-details">{historyPayment?.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">{historyPayment?.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">{historyPayment?.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">{historyPayment?.noRekening}</span>
        </p>
      </div>
    </>
  );
};


export default Payment_detail
