import React from "react";
import Main_content from "./main-content";
import Latest_transaction from "./latest-transaction";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <Main_content />
        </div>
        <Latest_transaction />
      </div>
    </main>
  );
}
