import React from 'react'
import { TransactionProps } from "@/interface/transactions";
import { NumericFormat } from 'react-number-format';




const Purchase_detail = (props: TransactionProps) => {
  const { _id, historyVoucherTopup, accountUser, value, tax } = props;

  return (
    <>
      <div className="purchase pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID <span className="purchase-details">{accountUser}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#{_id}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {historyVoucherTopup?.coinQuantity} {historyVoucherTopup?.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumericFormat
              value={historyVoucherTopup?.Price ?? 0}
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumericFormat
              value={historyVoucherTopup?.Price * (10 / 100) ?? 0}
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={
                historyVoucherTopup?.Price + (historyVoucherTopup?.Price * (10 / 100)) ?? 0
              }
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
    </>
  );
};

export default Purchase_detail