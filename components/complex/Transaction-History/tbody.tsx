import React from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";
import { NumericFormat } from "react-number-format";
import {TransactionTable} from '@/interface/transactions'



const Tbodyrow = (props: TransactionTable) => {
  const { title, category, item, price, status, thumbnail, _id } = props;

  return (
    <>
      <tr data-category="pending" className="align-middle">
        <th scope="row">
          <Image
            className="float-start me-3 mb-lg-0 mb-3"
            src={`${config.URL}/${thumbnail}`}
            width="80"
            height="60"
            alt=""
          />
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">
              {title}
            </p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">
              {category}
            </p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item}</p>
        </td>
        <td>
          <p className="fw-medium color-palette-1 m-0">
            <NumericFormat
              value={price || 0}
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </td>
        <td>
          <div>
            <span className={`float-start icon-status ${status}`}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
              {status}
            </p>
          </div>
        </td>
        <td>
          <Link
            href={`/member/transactions/detail/${_id}`}
            className="btn btn-status rounded-pill text-sm"
          >
            Details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Tbodyrow;
