import React, {useState, useEffect} from "react";

import VerifyId from "./verifyid";
import Nominal from "./nominal";
import Payment from "./payment";

import { useRouter } from "next/router";
import {ErrorNotif} from '@/utils/notif'


import { DetailPageInterface, NominalInterface } from "@/interface/Player";


export default function TopUpForm(props: DetailPageInterface) {
  const router = useRouter()
  const { voucher, payment } = props;
  const [Data, setData] = useState({
    verifyId: '',
    voucher: voucher,
    nominal: '',
    paymentMethod: {
      payment: '',
      bank: '',
    },
    bankAccount: '',
  })

  const handleVerifyId = (e: any) => {
    setData({...Data, verifyId: e.target.value})
  }

  const handleNominal = (e: any) => {
    setData({...Data, nominal: e.target.value})
  }
  const handlePayment = (payment: any, bank: any) => {
    const _temp = {
      payment,
      bank,
    }
    setData({...Data, paymentMethod: _temp})
    // console.log('Data >>>')
    // console.log(Data)
  }

  const handleBankName = (e: any) => {
    let _temp = {}
    setData({...Data, bankAccount: e.target.value})
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const _temp = [Data.verifyId, Data.nominal, Data.voucher, Data.paymentMethod.bank, Data.paymentMethod.payment, Data.bankAccount];
    console.log(_temp)
    if (_temp.includes('')) {
      ErrorNotif('Mohon Masukan Data dengan Benar')
    }
    else {
      localStorage.setItem('checkout-item', JSON.stringify(Data))
      router.push('/checkout')
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <VerifyId setVerifyId={handleVerifyId} />

      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-start">
          {voucher?.nominal?.length
            ? voucher?.nominal.map(
                (
                  { coinName, coinQuantity, price, _id }: NominalInterface,
                  index
                ) => (
                  <Nominal
                    coinName={coinName}
                    coinQuantity={coinQuantity}
                    price={price}
                    _id={_id}
                    handleSelect={handleNominal}
                  />
                )
              )
            : "Loading..."}
        </div>
      </div>

      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payment?.length
              ? payment.map((pay) =>
                  pay.bank?.length
                    ? pay.bank.map((bank, index) => (
                        <Payment index={index} {...pay} handlePay={handlePayment} />
                      ))
                    : "Nothing Bank Here..."
                )
              : "loading payment..."}
          </div>
        </fieldset>
      </div>

      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          required
          onChange={(e)=> handleBankName(e)}
        />
      </div>

      <div className="d-sm-block d-flex flex-column w-100">
        <button
          // href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
