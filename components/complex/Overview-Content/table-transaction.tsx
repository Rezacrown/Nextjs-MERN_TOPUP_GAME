import React from "react";
import Image from "next/image";
import Tbody_transaction from "./tbody-transaction";
import { config } from "@/config";
import {DashboardPropsData} from '@/interface/dashboard'



export default function Table_transaction(props: DashboardPropsData[]) {
  let _temp: any = [];

  Object.values(props).forEach((key) => {
    _temp.push(key);
  });

  return (
    <table className="table table-borderless">
      {/* thead */}
      <thead>
        <tr className="color-palette-1">
          <th className="text-start" scope="col">
            Game
          </th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      {/* tbody */}
      <tbody>
        

        {_temp.map((game: DashboardPropsData) => {
          return (
            <Tbody_transaction
              image={game?.historyVoucherTopup?.thumbnail}
              title={game?.historyVoucherTopup?.gameName}
              type={game?.historyVoucherTopup?.category}
              items={`${game?.historyVoucherTopup?.coinQuantity} ${game?.historyVoucherTopup?.coinName}`}
              price={game?.historyVoucherTopup?.Price}
              status={game?.status}
              key={game?._id}
            />
          );
        })}
      </tbody>
    </table>
  );
}
