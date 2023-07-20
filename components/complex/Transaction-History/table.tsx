import React from "react";
import Tbodo_row from "./tbody";



import { TransactionProps } from "@/interface/transactions";


const Table_history = (props: any) => {
  let _temp: any = [];

  Object.values(props).forEach((key) => {
    _temp.push(key);
  });

  return (
    <>
      <div className="latest-transaction">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Latest Transactions
        </p>
        <div className="main-content main-content-table overflow-auto">
          <table className="table table-borderless">
            <thead>
              <tr className="color-palette-1">
                <th className="" scope="col">
                  Game
                </th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {/* body */}
            <tbody id="list_status_item">
              {_temp
                ? _temp.map((data: TransactionProps) => {
                    return (
                      <>
                        <Tbodo_row
                          _id={data._id}
                          category={data?.historyVoucherTopup?.category}
                          thumbnail={data?.historyVoucherTopup?.thumbnail}
                          price={data?.historyVoucherTopup?.Price}
                          status={data?.status}
                          title={data?.historyVoucherTopup?.gameName}
                          item={`${data?.historyVoucherTopup?.coinQuantity} ${data?.historyVoucherTopup?.coinName}`}
                        />
                      </>
                    );
                  })
                : "no data"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table_history;
