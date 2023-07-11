import Image from 'next/image';
import React from 'react'

interface CategoryContent_props {
    text1?: string | 'Game';
    text2?: string;
    icon?: string;
    totalSpend?: number | string
}


export default function Category_content({text1, text2, icon, totalSpend}: CategoryContent_props) {
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/assets/icon/overview-content/category/${icon}.svg`} height={60} width={60} alt='' />
          <p className="color-palette-1 mb-0 ms-12">
            {text1}
            <br /> {text2}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            Rp {totalSpend? totalSpend : 0}
          </p>
        </div>
      </div>
    </div>
  );
}
