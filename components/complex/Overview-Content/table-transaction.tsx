import React from "react";
import Image from "next/image";
import Tbody_transaction from "./tbody-transaction";

export default function Table_transaction() {
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
        {/* <tr className="align-middle">
          <th scope="row">
            <Image
              className="float-start me-3 mb-lg-0 mb-3"
              src="/assets/img/overview-1.png"
              width="80"
              height="60"
              alt=""
            />
            <div className="game-title-header">
              <p className="game-title fw-medium text-start color-palette-1 m-0">
                Mobile Legends: The New Battle 2021
              </p>
              <p className="text-xs fw-normal text-start color-palette-2 m-0">
                Desktop
              </p>
            </div>
          </th>
          <td>
            <p className="fw-medium color-palette-1 m-0">200 Gold</p>
          </td>
          <td>
            <p className="fw-medium text-start color-palette-1 m-0">
              Rp 290.000
            </p>
          </td>
          <td>
            <div>
              <span className="float-start icon-status pending"></span>
              <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                Pending
              </p>
            </div>
          </td>
        </tr> */}

        <Tbody_transaction
          items={'200 Gold'}
          image="overview-1.png"
          title="Mobile Legends: The New Battle 2021"
          price={290000}
          type="Destop"
          status="Pending"
        />
        <Tbody_transaction
          items={'1100 Gold'}
          image="overview-2.png"
          title="Call of Dutty: Mobile"
          price={800000}
          type="Mobile"
          status="Success"
        />
        <Tbody_transaction
          items={'50 Gold'}
          image="overview-3.png"
          title="Class of Clan"
          price={35000}
          type="Mobile"
          status="Failed"
        />
        <Tbody_transaction
          items={'60 Gold'}
          image="overview-4.png"
          title="The Royal game"
          price={275000}
          type="Destop"
          status="Pending"
        />

        {/* <tr className="align-middle text-center">
          <th scope="row">
            <Image
              className="float-start me-3 mb-lg-0 mb-3"
              src="/assets/img/overview-2.png"
              width="80"
              height="60"
              alt=""
            />
            <div className="game-title-header">
              <p className="game-title fw-medium text-start color-palette-1 m-0">
                Call of Duty:Modern
              </p>
              <p className="text-xs fw-normal text-start color-palette-2 m-0">
                Desktop
              </p>
            </div>
          </th>
          <td>
            <p className="fw-medium text-start color-palette-1 m-0">550 Gold</p>
          </td>
          <td>
            <p className="fw-medium text-start color-palette-1 m-0">
              Rp 740.000
            </p>
          </td>
          <td>
            <div>
              <span className="float-start icon-status success"></span>
              <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                Success
              </p>
            </div>
          </td>
        </tr>
        <tr className="align-middle text-center">
          <th scope="row">
            <Image
              className="float-start me-3 mb-lg-0 mb-3"
              src="/assets/img/overview-3.png"
              width="80"
              height="60"
              alt=""
            />
            <div className="game-title-header">
              <p className="game-title fw-medium text-start color-palette-1 m-0">
                Clash of Clans
              </p>
              <p className="text-xs fw-normal text-start color-palette-2 m-0">
                Mobile
              </p>
            </div>
          </th>
          <td>
            <p className="fw-medium text-start color-palette-1 m-0">100 Gold</p>
          </td>
          <td>
            <p className="fw-medium text-start color-palette-1 m-0">
              Rp 120.000
            </p>
          </td>
          <td>
            <div>
              <span className="float-start icon-status failed"></span>
              <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                Failed
              </p>
            </div>
          </td>
        </tr>
        <tr className="align-middle text-center">
          <th scope="row">
            <Image
              className="float-start me-3 mb-lg-0 mb-3"
              src="/assets/img/overview-4.png"
              width="80"
              height="60"
              alt=""
            />
            <div className="game-title-header">
              <p className="game-title fw-medium text-start color-palette-1 m-0">
                The Royal Game
              </p>
              <p className="text-xs fw-normal text-start color-palette-2 m-0">
                Mobile
              </p>
            </div>
          </th>
          <td>
            <p className="fw-medium text-start color-palette-1 m-0">225 Gold</p>
          </td>
          <td>
            <p className="fw-medium text-start color-palette-1 m-0">
              Rp 200.000
            </p>
          </td>
          <td>
            <div>
              <span className="float-start icon-status pending"></span>
              <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                Pending
              </p>
            </div>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
}
