import React from "react";

import Header_detail from "@/components/complex/Detail-transaction/header";
import Purchase_detail from "@/components/complex/Detail-transaction/purchase";
import Payment_detail from "@/components/complex/Detail-transaction/payment";

import { getDetailHistoryTransactions } from '@/services/Dashboard'
import { checkServerCookie } from "@/services/Auth";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { TransactionProps } from "@/interface/transactions";
import Link from 'next/link';
import { config } from "@/config";

export default function detail({data, params}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <>
      <section className="transactions-detail overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              Details #{data?._id?.substring(0, 10)}...
            </h2>
            {/* detail */}
            <div className="details">
              <div className="main-content main-content-card overflow-auto">
                <section className="checkout mx-auto">
                  <Header_detail  {...data} />
                  <hr />
                  <Purchase_detail {...data} />
                  <Payment_detail {...data} />

                  {/*  btn call to action */}
                  <div className="d-md-block d-flex w-100 flex-column">
                    <Link
                      className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                      href={config.WHATSAPP}
                      role="button"
                    >
                      WhatsApp ke Admin
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}



// ssr

export const getServerSideProps: GetServerSideProps = async ({
  req, params
}): Promise<any> => {

  const { authToken } = req.cookies;
  if (!authToken) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  }

  const {id}: any= params

  const trueToken = atob(authToken)

  const dataDetail: TransactionProps = await getDetailHistoryTransactions(id, trueToken)  
  const user = checkServerCookie(authToken, "base64");

  return {
    props: {
      user,
      params,
      data: dataDetail,
    },
  };
};
