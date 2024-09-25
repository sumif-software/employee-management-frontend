'use client'

import LoginForm from "../components/login";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import {loginUser} from "../actions/auth";


export default function Home() {
  const searchParams = useSearchParams()
  const access_token = searchParams.get('access_token')

  if (access_token){
    loginUser(access_token);
  }

  return (
    <div>
      <div className="bg-orange-100 border mt-10 flex flex-col justify-center px-6 py-12 lg:px-8 md:mx-auto md:w-full md:max-w-md">
        <div className="px-2 pt-2">
          <h1 className="justify-center content-center flex flex-wrap place-content-center">
            <Image src={'/images/logo.png'} width={100} height={100} />
          </h1>
          <p className="mb-2 text-base text-md text-center">Welcome back! Login to continue</p>
        </div>
        <div className="pb-2">
          <LoginForm />
        </div>
        <div className="px-2 mb-2">
          <p className="text-gray-400 text-center">or</p>
        </div>
        <div className="text-red-500 ml-2 w-60 pb-2 shadow-sm bg-white px-4 pt-2 border rounded-md max-h-32 justify-start content-evenly">
          <Image src={'/images/google.png'} width={40} height={30} className="float-left" /> <a href={process.env.GOOGLE_LOGIN}><p className="pt-2">Continue with Google</p></a>
        </div>
      </div>
      <div className="flex container mx-auto text-xs justify-center px-4 mt-2">Employee Management V0.1</div>
    </div>
  );
}
