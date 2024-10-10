import MaxWidthWrapper from "@/compont/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-2 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50  ">
      <p className="text-sm font-semibold text-black">
        Quill is now puplic
      </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        chat with your <span className="text-blue-700">document</span> in seconds.
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg"> 
        quil wil let you communicate with the pdf AI. it will make your reading go a lot of smother from now on <span className="text-red-900 font-bold">:)</span> 
      </p>

    <Link  target='_blank' href="/dashbord" > Get started <ArrowRight className="ml-2 h-5 w-5"/></Link>
















    </MaxWidthWrapper>


  );
}
