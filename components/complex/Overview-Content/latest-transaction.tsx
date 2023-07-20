import React from 'react'
import Table_transaction from './table-transaction';




export default function latest_transaction(props: any) {



  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <Table_transaction  {...props} />
      </div>
    </div>
  );
}
