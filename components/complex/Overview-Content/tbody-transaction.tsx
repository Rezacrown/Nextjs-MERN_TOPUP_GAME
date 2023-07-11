import React, { useEffect } from "react";
import Image from "next/image";

interface tbody_props {
  image: string;
  title: string;
  items: string | number;
  price: number;
  type: "Destop" | "Mobile";
  status: "Success" | "Pending" | "Failed";
}

export default function tbody_transaction({
  image,
  type,
  items,
  status,
  title,
  price,
}: tbody_props) {


    const className = `float-start icon-status pending ${status? status.toLocaleLowerCase() : ''} `;


  return (
    <tr className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/assets/img/${image}`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {/* Mobile Legends: The New Battle 2021 */}
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {type}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{items}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>
      </td>
      <td>
        <div>
          <span className={className}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
    </tr>
  );
}
