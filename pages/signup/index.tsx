import React, {useEffect, useState} from 'react'
import SignUp_Form from '@/components/complex/SignUp-Form'
import SignUp_Form_photo from '@/components/complex/SignUp-Form/photo'

import { useRouter } from "next/router";


import { checkServerCookie, isLogin } from '@/services/Auth';
import { GetServerSideProps } from 'next';


export default function signup() {
  const { query, isReady } = useRouter()
  

  return (
    <>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          {query?.photo == "" ? <SignUp_Form_photo /> : <SignUp_Form />}
        </div>
      </section>
    </>
  );
}


// ssr
export const getServerSideProps: GetServerSideProps = async ({
  req,
}): Promise<any> => {

  const { authToken } = req.cookies
  if (authToken) {
    return {
      redirect: {
        destination: '/',
        permanent: true
    }}
  }

  return {
    props: {}
  }
};
