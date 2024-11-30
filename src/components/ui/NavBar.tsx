import MaxWidthWrapper from "@/compont/MaxWidthWrapper";
import Link from 'next/link';
import { buttonVariants } from "./button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar =()=>{
    return(
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-300 bg-white/75 backdrop-blur-lg transition-all  ">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-300">
                    <Link href='/' className='flex z-40 font-semibold'>
                    <span>QUILL</span>
                    </Link>
                    {/* todo: add mobile navbar */}

                    <div className="hidden items-center space-x-4 sm:flex ">
                        <>
                        <Link href="/pricing" className={buttonVariants({
                            variant:"ghost",
                            size:'sm'
                        })}>
                        pricing
                        </Link>
                        <LoginLink
                            className={buttonVariants({
                            variant:"ghost",
                            size:'sm'
                            })}>
                                LogIn
                        </LoginLink>
                        </>

                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}
export default Navbar