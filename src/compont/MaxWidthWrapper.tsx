import { cn } from "@/lib/util";
import React, { ReactNode } from "react";


const MaxWidthWrapper =  ({
    className,
    children
}: {
    className ?: string;
    children :  ReactNode;

}) =>{
    return(
        <div className={cn(`mx-auto w-full max-w-screen-xl  md:px-40 px-5  ${className}`)}>
        {children}
        </div>
    )


    }
    export default MaxWidthWrapper;