import OverviewContent from "@/components/complex/Overview-Content";
import Sidebar from "@/components/complex/Sidebar";
import { checkServerCookie } from "@/services/Auth";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

export default function Member(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {

  const { user } = props;
  
  // console.log('props >>')
  // console.log(user)


  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" user={user} />
        <OverviewContent />
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
