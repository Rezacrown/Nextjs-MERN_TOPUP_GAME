import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import TopUp_Title from "@/components/atoms/TopUp-Title";
import TopUpForm from "@/components/complex/TopUp-Form";
import {config} from '@/config'

import { getDetailpageAPI } from "@/services/Player";
import {DetailPageInterface} from '@/interface/Player'




export default function detailPage() {

  const router = useRouter();
  const { query, isReady } = router;

  const [detailData, setDetailData] = useState<DetailPageInterface>()

  const fetchData = useCallback((id: any) => {
    getDetailpageAPI(id).then((data: any) => setDetailData(data));
  }, []);

  useEffect(() => {
    if (isReady) {
      fetchData(query?.id);
    } else {
      console.log("router belum siap  ");
    }
  }, [isReady]);


  return (
    <section className="detail pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="detail-header pb-50">
          <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
            Top Up
          </h2>
          <p className="text-lg color-palette-1 mb-0">
            Perkuat akun dan jadilah pemenang
          </p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
            <div className="row align-items-center">
              <div className="col-md-12 col-4">
                <img
                  src={`${config.URL}/${detailData?.voucher?.thumbnail}`}
                  width="280"
                  height="380"
                  className="img-fluid"
                  alt=""
                />
              </div>

              {/* <!-- Mobile: Game title --> */}
              <TopUp_Title tipe="mobile" {...detailData?.voucher} />
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
            {/* <!-- Desktop: Game title --> */}
            <TopUp_Title tipe="destop" {...detailData?.voucher} />
            <hr />
            <TopUpForm  {...detailData} />
          </div>
        </div>
      </div>
    </section>
  );
}



// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   console.log("params >>>>");
//   console.log(query);

//   return {
//     props: {
//       query,
//     },
//   };
// };
