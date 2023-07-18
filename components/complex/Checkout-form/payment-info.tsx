import React from 'react'
import { newDataItems } from '@/interface/checkout';
import { PaymentInterface } from '@/interface/Player';



export default (dataItems: newDataItems) => {
  return (
    <>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name
          <span className="purchase-details">{dataItems?.bankAccount}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{" "}
          <span className="payment-details">
            {dataItems?.payments?.map((pays: PaymentInterface) => {
              if (dataItems?.payment == pays?._id) {
                return <>{pays?.type}</>;
              }
            })}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {dataItems?.payments?.map((pays: PaymentInterface) => {
              return pays?.bank?.map((bank) => {
                if (bank?._id == dataItems?.bank) {
                  return <>{bank?.nameBank}</>;
                }
              });
            })}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">
            {dataItems?.payments?.map((pays: PaymentInterface) => {
              return pays?.bank?.map((bank) => {
                if (bank?._id == dataItems?.bank) {
                  return <>{bank?.name}</>;
                }
              });
            })}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {dataItems?.payments?.map((pays: PaymentInterface) => {
             
              return pays?.bank?.map((bank) => {
                if (bank?._id == dataItems?.bank) {
                  return <>{bank?.noRekening}</>;
                }
              });
            })}
          </span>
        </p>
      </div>
    </>
  );
};
