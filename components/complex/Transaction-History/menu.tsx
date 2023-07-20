import React from "react";
import Btn from "./button-menu";

interface menuProps {
  handleClick: (e?: any) => void;
  active: string;
  // isLoading: boolean;
}

const Menu_transaction = ({ handleClick, active }: menuProps) => {
  // const actived = active ? `btn-active` : "";

  return (
    <>
      <div className="row mt-30 mb-20">
        <div className="col-lg-12 col-12 main-content">
          <div id="list_status_title">
            <button
              data-filter="*"
              className={`btn btn-status rounded-pill text-sm me-3 ${
                active === "" ? "btn-active" : ""
              } `}
              name="all"
              value={""}
              onClick={handleClick}
            >
              All Trx
            </button>

            <button
              data-filter="success"
              className={`btn btn-status rounded-pill text-sm me-3 ${ active === 'success' ? "btn-active" : ""}`}
              name="success"
              value="success"
              onClick={handleClick}
            >
              Success
            </button>
            <button
              data-filter="pending"
              className={`btn btn-status rounded-pill text-sm me-3 ${ active === 'pending' ? "btn-active" : ""}`}
              name="pending"
              value="pending"
              onClick={handleClick}
            >
              Pending
            </button>
            <button
              data-filter="failed"
              className={`btn btn-status rounded-pill text-sm me-3 ${ active === 'failed' ? "btn-active" : ""}`}
              name="failed"
              value="failed"
              onClick={handleClick}
            >
              Failed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu_transaction;
