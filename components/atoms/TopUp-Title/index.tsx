import React from "react";

import { VoucherInterface, DetailPageInterface } from "@/interface/Player";

interface TopUpTitleprops extends VoucherInterface {
  tipe: "destop" | "mobile";
}

export default function TopUp_Title(props: TopUpTitleprops) {
  console.log("props 123 >>");
  console.log(props);

  // let tipe = 'destop'

  if (props.tipe === "mobile") {
    return (
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{props.name}</h2>
        <p className="text-sm color-palette-2 text-start mb-0">Category: {props.category?.name}</p>
      </div>
    );
  }
  if (props.tipe === "destop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {props.name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">Category: {props.category?.name}</p>
      </div>
    );
  }
}
