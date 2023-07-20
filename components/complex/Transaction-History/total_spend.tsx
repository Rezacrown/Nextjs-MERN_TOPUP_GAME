import React from 'react'
import { NumericFormat } from 'react-number-format'

interface ValueNumber {
  totalValue: number
}

const Total_spend = ({totalValue}: ValueNumber) => {
    return (
      <>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumericFormat
              value={totalValue || 0}
              displayType="text"
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
            />
          </h3>
        </div>
      </>
    );
}


export default Total_spend