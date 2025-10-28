import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import DashboardPage from "./dashboard/page";
import SignupPage from "./signup/page";

export default function Home() {
  return (
   <Fragment>
    <DashboardPage />
    {/* <SignupPage /> */}
   </Fragment>
  );
}
