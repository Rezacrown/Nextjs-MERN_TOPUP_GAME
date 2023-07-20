import React, {useEffect, useCallback, useState} from "react";
import Main_content from "./main-content";
import Latest_transaction from "./latest-transaction";
import { getDashboardData } from "@/services/Dashboard";



export default function OverviewContent() {

  const [countData, setCountData] = useState([]);
  const [datas, setDatas] = useState([{}]);


  const serveData = useCallback( async () => {
    const res = await getDashboardData()
    setCountData(res?.count)
    setDatas(res.data)
    
  }, [])

  useEffect( () => {
    serveData()
  }, [])

  // console.log('countData <<')
  // console.log(datas)


  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <Main_content   {...countData} />
        </div>
        <Latest_transaction {...datas} />
      </div>
    </main>
  );
}
