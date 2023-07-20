import Image from "next/image";
import React from "react";
import { NumericFormat } from "react-number-format";

interface CategoryContent_props {
  text1?: string | "Game";
  text2?: string;
  icon?: "mobile" | "destop" | "other-categories" | string;
  totalSpend?: number | string;
}

export default function Category_content({
  text1,
  text2,
  icon,
  totalSpend,
}: CategoryContent_props) {
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image
            src={
              `/assets/icon/overview-content/category/${icon}.svg` ??
              `/assets/icon/overview-content/category/destop.svg`
            }
            height={60}
            width={60}
            alt=""
          />
          <p className="color-palette-1 mb-0 ms-12">
            {text1}
            <br /> {text2}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            <NumericFormat
              value={totalSpend ? totalSpend : 0}
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </div>
      </div>
    </div>
  );
}
