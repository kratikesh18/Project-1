import BittyThoughtsLogo from "@/components/BittyThoughtsLogo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-custom-bg-image  ">
      <div className="h-screen backdrop-blur-md inset-0 bg-gray-900/85 ">
        <div className="flex w-full h-full flex-col justify-center items-center gap-4">
          {/* <h1 className="text-white font-semibold text-2xl">
            <span className="font-bold bg-black/20 rounded-md  p-4" >BittyThoughts</span> is under Maintainence
          </h1> */}
          <div className="flex text-xl">
            <BittyThoughtsLogo />
            <h1>is under Maintainence</h1>
          </div>

          <p>Hold your seats tighter </p>
          <p>We are comming back stronger </p>
        </div>
      </div>
    </div>
  );
}
