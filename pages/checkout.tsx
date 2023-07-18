import React, { useEffect, useState, useCallback } from "react";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { WarningNotif, SuccesNotif, ErrorNotif } from "@/utils/notif/index";
import { UserPayload } from "@/interface/navbar";
import { VoucherInterface } from "@/interface/Player";

import { checkServerCookie, checkLocalStorage } from "@/services/Auth";
import { handleCheckout } from "@/services/Checkout";

import HeaderCheckOut from "@/components/complex/Checkout-form/header";
import ItemsImage from "@/components/complex/Checkout-form/item-image";
import DetailPurchase from "@/components/complex/Checkout-form/detailPurchase";
import PaymentInfo from "@/components/complex/Checkout-form/payment-info";

import {useRouter} from 'next/router'

interface newDataItems {
  payments: any;
  payment: string;
  bank: string;
  VerifyId: string;
  voucher: VoucherInterface;
  nominal: string;
  bankAccount: string;
}

export default function checkout(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const user: UserPayload = props.user;

  // router
  const router = useRouter()

  // state
  const [dataItems, setDataItems] = useState<newDataItems>({
    VerifyId: "",
    voucher: {},
    nominal: "",
    payment: "",
    bank: "",
    bankAccount: "",
    payments: [],
  });
  const [checkList, setCheckList] = useState(false);

  // callback
  const getData = useCallback(() => {
    const items = checkLocalStorage("checkout-item");
    if (items == null) {
      ErrorNotif('Item not found')
      return router.push('/signin')
    }
    setDataItems(items);
  }, [dataItems]);

  // use Effect
  useEffect(() => {
    getData();
  }, []);

  // function handle
  const handleCheckBox = () => {
    setCheckList(!checkList);
  };

  const handleConfirm = async () => {
    if (checkList == false)
      return WarningNotif("Silahkan centang checklist untuk melanjutkan");
    const _temp = {
      name: user.name,
      accountUser: dataItems.VerifyId,
      voucher: dataItems.voucher._id,
      nominal: dataItems.nominal,
      bank: dataItems.bank,
      payment: dataItems.payment,
    };
    await handleCheckout(_temp).then((res) => {
      SuccesNotif(`success checkout ${_temp.voucher}`)
      router.push('/complete-checkout')
      localStorage.removeItem("checkout-item");
    })
  };

  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <HeaderCheckOut />
          <ItemsImage {...dataItems} />
          <hr />
          <DetailPurchase {...dataItems} />
          <PaymentInfo {...dataItems} />
          <label className="checkbox-label text-lg color-palette-1">
            I have transferred the money
            <input
              type="checkbox"
              checked={checkList}
              onChange={handleCheckBox}
            />
            <span className="checkmark"></span>
          </label>
          <div className="d-md-block d-flex flex-column w-100 pt-50">
            <button
              className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
              role="button"
              onClick={handleConfirm}
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// SSR
export const getServerSideProps: GetServerSideProps = async ({
  req,
}): Promise<any> => {
  const { authToken } = req.cookies;

  if (!authToken) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  }



  const user = checkServerCookie(authToken, "base64");

  return {
    props: {
      user,
    },
  };
};
