import React from 'react'
import { newDataItems } from '@/interface/checkout';

import { NumericFormat } from 'react-number-format'



export default (dataItems: newDataItems) => {
    return (
      <>
        <div className="purchase pt-md-50 pt-30">
          <h2 className="fw-bold text-xl color-palette-1 mb-20">
            Purchase Details
          </h2>
          <p className="text-lg color-palette-1 mb-20">
            Your Game ID{" "}
            <span className="purchase-details">{dataItems?.VerifyId}</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Order ID <span className="purchase-details">#GG001</span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Item{" "}
            <span className="purchase-details">
              {dataItems?.voucher?.nominal
                ? dataItems?.voucher?.nominal?.map((nom) => {
                    if (nom?._id == dataItems?.nominal) {
                      return (
                        <p>
                          {nom?.coinQuantity} {nom?.coinName}
                        </p>
                      );
                    }
                  })
                : "not found"}
            </span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Price{" "}
            <span className="purchase-details">
              {dataItems?.voucher?.nominal
                ? dataItems?.voucher?.nominal?.map((nom) => {
                    if (nom?._id == dataItems?.nominal) {
                      return (
                        <NumericFormat
                          value={nom?.price}
                          displayType="text"
                          prefix="Rp. "
                          thousandSeparator="."
                          decimalSeparator=","
                        />
                      );
                    }
                  })
                : "not found"}
            </span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Tax (10%){" "}
            <span className="purchase-details">
              {dataItems?.voucher?.nominal
                ? dataItems?.voucher?.nominal?.map((nom) => {
                    if (nom?._id == dataItems?.nominal) {
                      return (
                        <NumericFormat
                          value={nom?.price ? nom?.price * (10 / 100) : 0}
                          displayType="text"
                          prefix="Rp. "
                          thousandSeparator="."
                          decimalSeparator=","
                        />
                      );
                    }
                  })
                : "not found"}
            </span>
          </p>
          <p className="text-lg color-palette-1 mb-20">
            Total{" "}
            <span className="purchase-details color-palette-4">
              {dataItems?.voucher?.nominal
                ? dataItems?.voucher?.nominal?.map((nom) => {
                    if (nom?._id == dataItems?.nominal) {
                      return (
                        <NumericFormat
                          value={nom?.price + nom?.price * (10 / 100)}
                          displayType="text"
                          prefix="Rp. "
                          thousandSeparator="."
                          decimalSeparator=","
                        />
                      );
                    }
                  })
                : "not found"}
            </span>
          </p>
        </div>
      </>
    );
};
