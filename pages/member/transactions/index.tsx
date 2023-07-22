import React, {useState, useEffect, useCallback} from "react";
import Sidebar from "@/components/complex/Sidebar";
import Total_spend from "@/components/complex/Transaction-History/total_spend";
import Menu_transaction from "@/components/complex/Transaction-History/menu";
import Table_transaction from "@/components/complex/Transaction-History/table";
import { getHistoryTransactions } from "@/services/Dashboard";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { checkServerCookie } from "@/services/Auth";
import Head from "next/document";



export default function transactions({user}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  // state
  const [data, setData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [actived, setActived] = useState("");

  // callback
  const serveData = useCallback(
    async (params: string = "") => {
      const res: any = await getHistoryTransactions(params);
      setTotalValue(res?.totalValue?.value ?? 0);
      if (res?.data) {
        setData(res?.data);
      }
    },
    [totalValue, data, actived]
  );

  // useEffect
  useEffect(() => {
    serveData();
  }, []);

  // handle function

  const handleParams = (e: any) => {
    e.target.disabled = true;
    setActived(e.target.value);
    router.push({ query: { status: e.target.value } });
    serveData(e.target.value)
      .then(() => {
        e.target.disabled = false;
      })
      .catch(() => (e.target.disabled = false));
  };



  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" user={user} />
        {/* main */}
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              My Transactions
            </h2>
            {/* total spend */}
            <Total_spend totalValue={totalValue} />
            {/* menu type transaction */}
            <Menu_transaction handleClick={handleParams} active={actived} />
            {/* table latest transaction */}
            <Table_transaction {...data} />
          </div>
        </main>
      </section>
    </>
  );
}



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